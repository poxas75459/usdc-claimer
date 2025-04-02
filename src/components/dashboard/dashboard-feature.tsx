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
    "4aKDn9rcoheCRjUUTFxfKeDzBMTY2m8TKtVyeqncmpfZXnVCSnp3ywiToFX92KumkTUAXYq1cNRdVVDFnpYgCnwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6L8gUwnuCzWsFfAkTZp8X9mGqM7dTYyHDmnvKW6W7k1RY9VHnwG7eTtCQoGLUik9Wr3aiEm4SPJBNVPMTYYQzu",
  "key1": "5R5U91xnY293GYBpPjimhyHn3pdD5yyGSK4pRQCy8m3TvXPDeo8Tt6fLqGcCvJSkLse6wpkh5mfxqyAojHAw2bew",
  "key2": "2dd7eV7AzoRDAbSeCn862LeUJ7tt6YYyR259rLL96LAgFQYt5vr2wP2ou2M84Vmix37qZM7gihUq17aeqGnL4PWZ",
  "key3": "4XhyjqQ63EDBqcmuMtSeQ9WUMcKHp4rwTDmyPZwTbvqHPvFvu2Au44Q9n3kK42Q2K3Tp3Q6YBAxndQaKyP9wWx6Y",
  "key4": "3TJKJ9RwuneAw5MqPRb2sM2Z8XcJws2dc5ty6LvSmsDdBzAiZkmxYh7BzXTfwkQc3FwSn9UdCRiFBHxesPTCyXdL",
  "key5": "2sSZqibjeNGCfLzRoyfjwQnd9ATsoU4hG7GkdBRWyXMk83JtGN8gtKf78ZW94J6gYPHSnkvcSSFoetZ5MLhsSXkC",
  "key6": "5do7qL4DUH4rggETA5xoBiU5cz3yPy7E9c44UnS8hzqq7c3kqBUL49cTJnbJUzKwizEEC61ucDA4azthW2NbewT8",
  "key7": "34yLoSGYyres9DAwvzUvvfUAZkVcRa4BgjLbo7xWc55m7g2mujE8s8TakdgunUhyr8yq6qvFR5mHZABoBYekAQqu",
  "key8": "3X3ZZWBPYYWsyapkGcS7KcBv2c3hgBecn5kbLArigyAJgPEWMMP2qRpZgGyJqjLChPK4mWrLKzCCgKCv6HJUmKxX",
  "key9": "65JRU5Qzh3fcm19nbXHdnNYsbVyHoaoddXWhALhrNAfaWJKGKSvY1MMG5XBLUZSg4Musugd3q1PK93S4cs7KZiXQ",
  "key10": "5NU9khDsBgF37nKVgbfEJvG8MAEzxxxSHT9HtMTzMU1mZ8t1RBsq95PcqmsWpLipvFnYyjU1GwcobiHHbMSssrns",
  "key11": "434DE2qGP58ofoxuC1TaemF2QfP4x3eLG39QgRHY8LbU8KcqmRLL6C6JkYSLhVpVkm7re2jXai2Jr9BuoR4oNxjU",
  "key12": "pHL5VtxpZyziY5JAnxibFXqX4BHNTxz6EYU6Qv64TUyw1MFwQTexS2GnGUdsAkjrSZArvySjMMhENiUJW1v2aKJ",
  "key13": "2LepQ47yQv6x2QNJ8fpL9K3xhk5jJ3DQdEAYoZYJ8zXEQVpW6nAxFHwX6MUQmzMuK9bGrey8R4RuGs9B17uBekbx",
  "key14": "3QnGSc9JiSqsVUwXc3qiCLJQkfXhJxYL7qVgKpFxdJvdBCZgxAKWawu25ErtuTzQaZg4equpjmxR1fhDg1VrcANv",
  "key15": "4LYxnJsHCCK5fcyk9zYWTK11QSqv5vdX7BcZ9GUPzUKMN9a4X3Vj9imKgfUbx3PEAyKg5nVnzLkgMZcQJrhN3FL1",
  "key16": "4dAcbsdTxmDwJRbjBfSUEPZ4k2bSzuVbkPKb8y9fpV9p1kUQp6iFuJpEHr9eChdWSa7qTkX31QWMipgnodSFtiz5",
  "key17": "3jKFbjgPsLU327PBQBzVGQTC8AAk24uHUNPH7k5ZERqdCJJunJPkctj5KWk6qZMmWgLg9iraDoSF4LvTyrs93GLo",
  "key18": "2wfcy4djkZTfm7h36o6ETLVVMngYNxNfgGEx4XGY4PpV9bzZswuBmAxG8M9cFPj91dyU9R6mdL4pkfnfTQk51cxr",
  "key19": "4hDsv2FEagfkdFvxS5mbpq1gMSCpoJVdnZ275Pb6BxC3jodnCiBK4Zzw9vRLyUpnwT7h6sKzWBg97qig2LQw5TYp",
  "key20": "47Z1xSuuaQh194gdhFeRFBMKPVCfxjRuoqMYjawoXpiReteEd1fxr4ZJ6eKzVM9jjeAKam1nsVBaxN4x3aUW5ceF",
  "key21": "433GKfeMExWQHV1xSuscAChfc8MGuTzBZ42WGVnoKdmdYLJYuTC6y9E83mXR67pFJJXvLdwy4DHUSD3repto8vg5",
  "key22": "2umZW53cv65SkfoqYA81oH8EXVQbPr2bhWgAMLMXzx88N1uWxnigvuod6feeZDYZ9jdTYeGQp2CNMaEXmWiHWYAt",
  "key23": "3S5NNPNQzFWFaXTCC94NZD9St6cZEAUJ2SpyrvXdYD9esZz6Ks1yJdccct7agRxoYGiSRfsgUBGBEh3ssTmViWsy",
  "key24": "4TrxipoqevXi31oRn5cgrh2Rxe5jsynMinAYp7MPoMCQdmtBuhAjpFYysqwR7RKHi2tcUERkJ8RFhtASt3bZHGJG",
  "key25": "52iJ9zUrYVmEdbB7k6TvBJ53wjntBcG75aEJDHhkmR3jwqqJ2u9R7JRfaYYWsRLAqDq4CfgScR2WEh7VYBf1BqU2",
  "key26": "3FsXwn9up3ZL72WfmGf62cNZ6qacnaNtM2hZ1yACQTbLEFy6ZRf2U8onCdb4W3Xs5AxiY7BT5mcaGD7CbPCPXCCH",
  "key27": "2JgQ21y8vkbWRTBAFz4wj5XgeDvGGHcP9mChngiGxUPA313oMjoVmYVKRDjmPSJaW4u8LcX3hEmsZFoG6tiZLchq",
  "key28": "EbpfPVXxW5ytsFU4TiCpFoPG7peSu3bZGUebDELrRaJ3Rws5hkdMaKQCPXhT8YZ5jixXA57M95QzsqwfCDpwRw2",
  "key29": "2CK4qbp2D1WYPL8KAHgqkug7ZaX6442cf6zvWh3iLkbqPzEW7p6f19qsiQKxmaXhJ5Lx6idQPvPeNFAqhKAT83xF",
  "key30": "3zcJQskTUN4mntTpZXvLtkGuXHvnCdbkvcKNtBsgCx2JRYGF9QsNokCVZqj2zJ357595Uu4RGj6D5fmi1g5kd9fK",
  "key31": "5s27htfgrcGyRuJjWXHuLf1tJQQVw46jMg2bDcBLrz6EoWmivdG9mrKf69uc8jbtjnvmSXJtsZL8ZYX2m91hq6NS",
  "key32": "59fHu6oqMNEpk1dzpkuMo8vWPmvtz7Ss5PVEgtW5jqET7KM4Rxm9gc3NydEVoNT9bYeKG5gR1HySGbXjFL2sAbMD"
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
