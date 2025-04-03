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
    "4icjzLhcoYLvfNHKubV1TzS2bNF1eq8HS5FdcM7d5pFxTkz1vRyu6UX4jypgm8wu21w1XTJTR7YGczeoLH9Rsj79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PsWrFtr9PLkAy8qaGUwV5BzHt8vmiUBVLnS2JAnfT6tQrUtdKRt5yP9azQQWVkW1vKySWCBCn3VdCBpv8ycHG5a",
  "key1": "vAzAyBJhsf1Bnwz4v8Eked5mDVrbNwJEhQ7w8U8vAFmx7Rh6VmFMBxexUhFpZWQWkh17Dw2mgi4a2tdxfm3gLds",
  "key2": "3PtU3TUkdxMpGKKM8wSSLqp34pCtPLQFKPBP8nruuWkmZEKUwauDy5bssSTNEWJyVb5b6RLFLvA92RHjTsx7cMna",
  "key3": "3gzz8tAYwmWWA9sAJWKpZc2PvsL8NK2FTvQa8BgNipPttgo4NALHHfscvfaPJwoj6bQfaWaj6DCrXajMttCaYgyX",
  "key4": "5cAPR3NPo418Qiv5AKMET98RSK1fravkwN7JYt7a2wWrymzxs7WJUXAnApJyExVnuvRHLNifTsR9WQ7YUAerPtTX",
  "key5": "4NL8mWVcdkNavyxwEJAQZc5iK1kESpQPwVayatKzjaouCE82ndwVRG8dWLfs1Q2aKsUL816ac9EjQxTAea659dd5",
  "key6": "4EXRGMJm3MGqoRKmn1c3QfKAKqXJ5dZB63zq2DmA8TD6LF6tHDNLw7w4HgBX28jQ5QbfV4Kv5kQWs2Vm5bDadVjj",
  "key7": "3y6XtaxXzEU8fH2w4R86ansrA3CLBYMeKeSX7HyrKMc7Qn3P3MmgoTVfA2sg2ahxr22etz8mTNtoHkeQC2x5aTZM",
  "key8": "4yVYSZct1GhSeXTgbRDLrKhXDFg8CtiCYAyRXRYLZSUqmUeA7E9eyJM6RopDKAggHtx7pJpwBMAvve4gccPBtoVW",
  "key9": "3XzbwKwavQWhGm9k1Q1GmugvDAffHVfDeVbe9NNu4R9zwPnxJDcJoitV8HAMkiRiFgya8YAnRNDFCD1ZSEFXDUgF",
  "key10": "qqgQRxCYaP7rQ6vWjQZ41JpqB9MEgZ9RCM2k3uGKuj5XykRNfu1r2nSFuPdVnL9eXBZh5RUowNiaWa5t2Vop5bm",
  "key11": "4cMe8DamUd2JUKB5ahJLCPwTqUTP5j8rA6DmXGGKe61vxdUm816FUbD76BGexxFPtE4ZD3zgKREV2f5mMysVfsK6",
  "key12": "4URkinXbzVtp3mFkf9uusYpjhsPw8vbBYLAfJYJW97UhyiikPJTAnh8euARNvewrgRk72FeVjDd8i4g5cGRN2GCD",
  "key13": "3R8fUQeNJUmQTXJSHTK5m96EZNLJLFvCcj3hpnwUKu7Hn1ezWJbiv2vhnnpH6Yc3CuJAKNfRzQrrDkmGi5JzgA5a",
  "key14": "CsH6WLmi9YLxc79ys5R6kpQKgjSLzYeyEaWbA4w677xbXowFbM7U6t1obHq3y1Dc942cH7gHSvbfXBctZcowucF",
  "key15": "4yBAHAhfY4bmNzkwznYrf6xy8cgViL8Z7VENc2RX4FWgECNMrMR5JGwCq8rAGdVsi6zAAs47Fr17ng79vwyMpKwn",
  "key16": "VVAGFMHke1mqTti41SfZfeHDtA1By3GfbmXN8aYm386JApmth1vju944AaGGa7ECaErbJ4tyuCWDnQNtJPzLdiw",
  "key17": "4mqcCvPDTxh2yy5FKPPEM5ugMnxP4yAKpRsEKHPcBZcVRNewwh4tuYeu5NPZ94G1rHhWK4e1unQ8655PHmNDWwGR",
  "key18": "5Na6nSoTYEEUov8WwHmcPAhbq4jBHF7VcPWETcu7eDrS8dHJMyKq32uWASjPnyB6MJLLVGTAKa6VevnFytxvvoK8",
  "key19": "T87UGq6EFZgaWMG9ta8iKS6NfYQrzuuvZx1A5CBhDpigiSmSTCDE7df6oPGTFJAmRjeeWGQdtf7JkyAxphPBZxh",
  "key20": "2rjaQhce6cBNx6xvzNXq8Db5BzLG6GXMfbVeYexKEyek7ktfD162ibpCM8TiSiUmVS9RKjSwtBdKGivLxe8SRDtc",
  "key21": "ps9UWuyGzNv3C2pgacywjX5HFdei5x1YFpbiye4LN44HdK7F2vp5zHm7JTBaa9kGFH6fAPDsm2RokEUx7zcnvkH",
  "key22": "2VfLxzTpCQD1rpodopqABEWFSptqvRuJVsvGP4fgYHT9AMcHsJSLmzkQSbxaUL8pTGAzSy5ocAG5HpLbnPpd7MKt",
  "key23": "5JdywGKBxvAT1n23tn77cAwBHVp5ELzmhLHuCQ3QKv9ecz7J5swHaQCp9tGRjHrPn7nEYh3YdcqgdCvVPpEo5atQ",
  "key24": "3sQSSvbUj1eq5izXFpJkczGZSTjB7jnhYXoyxXHNNvNTzEniSpU48kWBsAzabP75nUe695G7ydkEFQjgMt125RRH",
  "key25": "3kPe2J5cf6D3R5NxPmfjy2shpa8eNW6JAqLRmEeYoXRrV3yejutXnEYqksHevAqxWwEM9kTRbC64f8ZoQJyEhKfs",
  "key26": "ge1J8sa3tEuVjaDm23wt2zkt5vuBwAHFNkW22fivtNBJVmacCkFfXPfXP1TzQCM2G5Y69qv6RAZmc5n3njXw2v3",
  "key27": "3SGAPcHLQvaDo3rd3DErUsdXWegZVBo5cnQss9XvZejwLK3ixT4Keq8nUc6XyvZA83mzdADT8HkVY2AN1cySaf3E",
  "key28": "2N7EzXKy2ektCHdxYn9uVMJ1C9zWVmnFVtqdeagApFVeX3kkT7U9thRRqw37reEmXyGind36Ktmpie2mMNf2i9vD",
  "key29": "4gDS59c4eofKChjkc2emgZeh3be7VdG7CpccFD9zD1LcFsK2d7gGfEwBeipUoEjtycbDEnoRxJXo1Bh2xSTLtQ5b"
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
