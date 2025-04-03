/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "oe8GWonWeetTsJcBQMfHoQDrAWJMdodaMF2NKLH2p6ePgCCWbUeW8Ho9D8Unu6CN9PdgSQpkKYUm6GoGEquZRtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCyJg4XUHutEUE2du4JG3HveYSUSuuLhSJM85qZEjdi9UzYPm7pHFcmrQuYeozu2dZoBc1wCRfzXadwPMkCRApu",
  "key1": "7zStpsbh6PGgTcoQij4yCm1ZbF8ZCJy5WrHf2Hnu7NHaSWwNfuESfT4g3oQRCNvQX2cpKXEei3iiAyrpXsbCYvs",
  "key2": "4C4Ujef4Y1sByC8DA7wV8KFEfeXcQKz9JfDHhdRnThKNKdjHfM9oGx7AbfXQz3TH1TD67EKi4hXrAuEAJzXa7v3x",
  "key3": "EjLAJposy6dH4KYed3qW3go7qKMvhckapp6ZvtLvK3DYS2Uisr7tbttFn2W18om6VtVFQyucjKrxing7iSz9QNy",
  "key4": "4dsJ3x93apPkrYnP1uoT6mery1WhXofCMwruqmNi7H9DpBn7AVSyKpH36gEBkn6exqMQJLVuwSBbScHMaiQPVhQA",
  "key5": "4bTQd896j2TdUAnWND99FgVD4Wc4gdkdvwJYd3WgXbegZ5SD3iCEHL9uxafp5CMKxTtt6TJxbCrmgxyaHA8x3Jd1",
  "key6": "32Kw86xcsqCkaUFMLNa6uG36jeo18YhQHNiAKWkSD7oPrBw4wxGMeGEUEns52zn7rTvw1PMkiobb59NEUue7V8Ls",
  "key7": "46PchMLehzBoRi42xGdafzQMM6aGrWPJy72FVZv9BVc1eLfpr7kWQm19HBKFVGGs93cdzwPLXZxYbL3aBneCj85w",
  "key8": "wZwMHTi2f6tVEMakfvUCV316uD9CvWhYhJYxriL4E3atnM4YQxLgSEhG97Xb4sBaVFKBwG9s7ChtaJHC6wZhgg6",
  "key9": "9xJhuaDtckzFNrKDWHT2iRimmGRMhkSwi19CmzmiKkNnUWRzGghHmrvjmhTq46AgA14pM7ELhVRNRac9ADDz56i",
  "key10": "3Sidz31XLj2Nws1ZvBRJWJsiWoTTGrQiRvXzBnhFysBnobLHG81RC2dfDAQKRPCMC4C3L1TEX528cJq1bVcDFyja",
  "key11": "44MRuNDQksoXHyhMFrd5nxR1tis7n3jQyrWMjHJMfcUkqVPBc6jb8evSeyzFQctKH4a1iKX2ZweoY7CtNmYmywzA",
  "key12": "5an3PV2SVJQdB5HZeeVQD9BeEw11mUbcUW6wuD9pvVq145zankNDxqAQwWKNHRHxvzifKtnoHVuGtCh2oVk9rfTu",
  "key13": "4djBgyXf3oBAQmc3Erj1j4oHNCe1c22EZP3s3Fxebui2PkbjSnJEnokcWoVewG7DghX9Asb2RcwDfcrCeS6YjKXA",
  "key14": "3rW1HXGphJW3eTdhmccp83NHBLBoxWDV4AJJN9x1QHQvgdUqw6cXhpcEPjZbXPoqzMaVkeA8BbFUT4xeGJYvBxRe",
  "key15": "4zyN48zzVBMbZt9LnAFWd1CuizfMPJLcuTqrHUSuiB8LfyyjwbZhVKjr5eyfx6vgJoBdvw4tzXWKSX5atFJDotwF",
  "key16": "2mXaoD68dXqadySNeQyg1wGpkPepQzBUNQxHSizzRPtw351BPKRgSjtLe7sMR4UAN1zixYY8W2g9cEfu6WM9mPwD",
  "key17": "Yxmr3xtx7Qaio8nsh362BbpJQPkFedPAzm6zrXv757SRgebdpKUCeC8c8K8Nuj5Lgabu9TYnYEMyWaZiQqEEkcY",
  "key18": "vCkAp45RL4gW3gpMqALiyadKaKfSo42bbq1YGVxRbn1gqokg1J94S22mtrgYdpiExKmS8ckj5SZgUgGzWyaAb1M",
  "key19": "3QneKXfLKk5bY9zTeFh2QoQM7Cf4rUQxLTQfFhyt73cBVC8NK1WHF6wTx5RifctjxqYugQAYK2AN7eVCDaxqyyn5",
  "key20": "4xkgRRADNsAa7Jm2NfqQmZTzrU8beSxR6cdKDbociFk1KxZAbLC3FFGYSaQEno4Mzztx6dt1ykk4HuxYPyQhUjmA",
  "key21": "2ror14GzCevJMoQCsravs9J53Pr1BoFvA4nmG8NH9cg9TzE9118z1vnWfWhwYubRjfoaUWE357pQWhtfa2sd8qNe",
  "key22": "4vKJji8NvnvBSonuNVAu9akrm4EsedGLNGyySkqSdAWbfnajqoxmpnDKgNB3H6MwaqjtDaZvzVCfZd5BS51ucvDw",
  "key23": "2n4VAoNjsoVrt8KxkbMXCp7VPheLsyvR2BdS5eJhziZWLB2NsJ42cjLe9xWFaoou7SFLEKfNPfQdcWLG6oJ47Dpm",
  "key24": "3wa2YshuVp22EqiWTSsYSFFGt2oyHXeCKhmYBprq48dPrivG5SRLZ2a2cKUsrSjSRDzaUsFort1jXKRZ1x39Yvwr",
  "key25": "4t8gBAVekaATDkjWdi8mVPYvpX9Hw5jBxdHBqxTWGgQuBPPYiiRorxihFM2C1QJJyVgupKT63s8Xb2Mmsvf14N6d",
  "key26": "2DoUFhmnTQNe23VUnYwaGXEjPdtUaYH1ALyzXWi7Y2ayHY5BPjHc69VAXDmzWnZrSTupYM9ttGwe3D2KoJVx3Xdy",
  "key27": "5z82myodCXmzTA8a1R3UUzjnqWY6E7WBLL2V6RmSvsADnVFJS7t3ZyNs7HbzjNUzNJy5o7jknPH4LcCKfiy5zJkD",
  "key28": "4ziafDrHX9qRrM7gD9uF9oikks1rZBnW6aq3gdi2mQJzjwYVaDuuZWZjzLFTyC6u9VxEv5gtD8sEoRgMFw2zK9hF",
  "key29": "3SbT5p3mn8QLNNjaMm5rPXmQswJvgC7UqahCn6L2xdJFPdUJa74HHx2gawXbTYKmEhB9uLa1B5iqQ1RZh8vZFq7G",
  "key30": "3YiEgXfELpvYMfhs75aiHZaJ4m391RaLBDTKRiV38FidLCQ8TGSAgsNyUCEiAR5iyG7eKRqAiTwTEC5fgnk7MWfE",
  "key31": "4m3gcTAUqGbubaafC7eJ3akbTPn8CsnogrHd59LqRCzCvHcxnCSAVaY1QAoA6hKzikUPncskamvSBkPH8phPHVEG",
  "key32": "4vmgKFrcWZKjtutEAgTJDPnsbqfXLvdngaAcFzEu2KvPgfgvQ5VgSZ4SEUMKoNQ2RQRey3txLA9cnU4eKekPNPVR",
  "key33": "c4q93vPmCuWSUjPmeu5oPBcZNbuHojksQZN7PBSDtSDZsx7PBTaT4xDMLUb1qT6bsbsMPQUzArUVwdLdrEkBYJv",
  "key34": "1rXozpBLXZKxVLQTxd5Dn3xusZXY41M9RcrTrgW92G8QFmDuTB3xrpewryPxnqqUk3yYeFtb7b9Z1yYLQXSMapr",
  "key35": "42PKfYADvB7dHGxmWm1FLUDYp72CAusNKgyfQaxRwdTfozajUsw3895epm4uY4trchKAE2DdSm19GPqAof6FjoMX",
  "key36": "5uxCVsgFAx88iRZcq28LjgjEBseP3JiBWU9UvLJmD1Dk6myJrPmRQJ9aV5MywK1v4BcvZcp5rxRwucJ6nicfkCJH",
  "key37": "26DnA7HTsQzL5B3pG386WijyZ4wsrFoocnCHCKCDQErr2L4JecKuKXbaKS8KGq5xerAHoQH9zqwrhFv1Ne43AWVQ",
  "key38": "4SZAg84AQqHsskinmRN8BkSgzjDW9BF137gQVEaaKhQYk3a5dH5akAdnkEuU8pzdhpQ8SD4by6fCkgrm1xDneK1f",
  "key39": "34xYT8bYSu7wFtYvkFHj5wdE9wgso7uAcA4gtTeHEzrvefmzDzaAobih43qc3dmHKn9dyYfFCYAPutrickKj7A4Q",
  "key40": "216tCk3A4hqjKEtFaRR2MioRSEH1kym8yGoALnbQ2R6TsGvvkfYVCdtvB6tk9vuRJ8GkwGEwNqRZsdhJQ1iD1iW7",
  "key41": "YSKPQBgyrXCkH15CyCxggyP4eMmLmLLiUFYWDFPmXXuVqnwfZ9UfbiBSJBcwDJAYgDwukGht7W4zJp8QSj36K1K",
  "key42": "WakWDiGqmwdfXKZsfzkn3wfY2HeEFV5DMenJYrxRonKg1LEeoHmcS9iC9e9UxWo95QFRAmZTtbsYgkYLQPrKm8E"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
