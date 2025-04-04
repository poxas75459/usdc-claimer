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
    "2j3xYECnmM2KtQ5JP86bCbQLdbJxRxD8zAhkjUJ4GnwJpP7bR2u4skZXEyeGdbPqYmY4MQUGTLq7ghDm5HVsDcdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ue7g5MUq14284M85MK69FeWpsNWARst73fpEubm8U2nqpjUki54v1drkZfovfdyHCSnK6nkop526RNP8zXR3fj6",
  "key1": "48DM6B6uLxfUj3DjAkXTrPpGvn4uyR8yETKczVbGbNcD6ijbuX6JAnpcPN2RqStJ8cGGRuCqJMQS8RetACyW6AMA",
  "key2": "4WQzjrGJqsX24f2oJuzHYc5tg3Eenuc84mZAPsMYND3BWpUHR1bcNgPpkPk4z22gEAe2WABEENNjjuateNQJxR46",
  "key3": "5XFDFowhbz5KxiwvdZFkPHj8pHd1CiJya4qX2eyoxbKqk5qBHaZ7kUjEuZrspvfcnVfF6SgNeZRVeiAw5wJpwb1k",
  "key4": "ArF5pVtw1B16pZ9FHeUsAGdNat6RJU3JKB1WkXsADeUr8jcbuyUCNryW8Hk9W8cveD2AmpgyfCLgDKd97Q9ezo3",
  "key5": "2VWxHh7o3qTAtKVjFejV7zDV7XBJhb3BRhxL2DXo59CsMevDPYgazLxB1x6tnKVDv6mJfvfdK1d3hJN2jzfyCxfn",
  "key6": "BWXLSS4tYKMJPbiWtetynTRy6Lt8npRzpsKzjEimSehPNu9EemuAVfxxb8ujrayUVKRZ7g2uRL3rAEMeuzec5RJ",
  "key7": "6tMweFEyseENFgDCefaikh6L9GbRamnwFgGrFtnVA2VL3pEXCUDdp4RVB7ngJYW9MN1otnx8QfP74MBvTvUfjAm",
  "key8": "2sYDrAHnZVq7fXvjNdckFSMhrs1hUGXCt1QYnJoeQ6h4j2dveCn6E3MC9kxUyoM1c3wNH5hrdsNhowFsZgHGCuZ3",
  "key9": "3zZ73xTmr2eaXaEzan9zDjLgfCpj59a9taZ61szV2pTgzFKA8GHjh5EZSSHRcBuLm5hFGwiF6w2P2RDuXGV1WhWS",
  "key10": "4eNMfpqANcxUxsAKSgKBB2iouuFiNUywmBgfWb1WH41YAY3teeqhzzHenfQC7EQdbvMq4AWsJJHQSPdhJeHWjzzR",
  "key11": "3EkQMR49cP8W53DGHrHp1j9CQxyFXrRQsXC3V1uEkaYrfv4wnZgiZbC4TpotAHzhntcZvqEoeQb3K1j7cQVx7a4j",
  "key12": "43ukSBLvCmzUc3oq6VE8NruFFtzBACtzb29RJWUc1CGt8yZdu3HT2BwkETz6ET2iCf2gR3xJRsXfBpRNdgMsJYME",
  "key13": "4RXmDWS9TnJpqyGTb9me8YyGJTVhN85YYp6ia8mk2cxK3WuprHptkuTjRofj6SNHXRjV8b6Sx1BrKTeBnERCmmvw",
  "key14": "5Fn2kEzcKUkbDF3fWr1wX84g5i2Ss6xCmH7eTNkA6RvtFxnC413YaMfvE7opUY6dj6RnkWgC5tpRX3NapHsEqrWK",
  "key15": "35VNHqu32uV1BjXSk26f93iR9okxVxK2FarWe4C3CS52S2hUaNyKgE67NmmB1LkSuR9Tm2fnj97wQwoHnrTQ6cY4",
  "key16": "FaqZkXsNnLd6AKwnp8aMDSxHtgBrzC3MPZfPmEC9KuRFeBhg8roRXsrEyQmQdVw5dJwyyqF4Yd8GdusqSyCvkrY",
  "key17": "4KBZjRhUguXwSLhVKFX5AMWzdMznnbeVK7jBAQqRKZpyLRCJNAQkiSg8RvtRPWHP5bdr5mUXLZGwygkV6Xtbvg22",
  "key18": "3bce3NSNscV6URVes5fW2gtKqMgMkZo2iyrzA8chGVPQdC6VBBQKcje4bQXQTqjrkYaAB9R4eYTtrKQSfQYA3CvV",
  "key19": "2NAGUVLDfjASrWq6kKamNdpPozsbw48ffyKWRpRbcw5aT6gHdtLh6yrX6pLzh8ESNU2TeRE3uX77XPTmDjZsRepq",
  "key20": "2wDKqhdYVpTe2Bes6zFfszwv9LkMG1DWWBAgp76gzERLXSsgUo1CbdWboUEA6k5yragSsYLKL3Vq5fXVL9c3Vjx8",
  "key21": "5ea841HpPRAqxghKhRtNXzV6fCWzGh7cdk2bTmdMk973SkgQLuLueVar25Pp4aecJobBXRFddRV4MusKgo7DDmwS",
  "key22": "3B5qBzpdYMmCjqnrPkBiWxS4srJ53bxqoyRSwZYstXD2xnQcGwBnT6a5CPTqXT46cDfBy4axR6Nw5NN8DynJVshd",
  "key23": "4u3Tv9Af7F2VvVxxFemymJkyuB7CGMCJmiyuUknsvPybrrUGWH4RuN6P5o4fQUgupCD5qcdunDQkKd7Bd3mwr66B",
  "key24": "51uWFaQaaht6UWjXLbJ6NdUF5YPSymeVi5kh4W4bcgGqrMYGEtJKREPMMGWJ2bjWuC5eYDu7fxVKuoMbeXQhnM6J",
  "key25": "3KWKjZk1rsacFMSrxaQgPC5xwW1V7nvPXC3QMaHoz2u28UbkYrNwigabjakTVw11CUKnTa7onn4wsFqcaCUdpJt4",
  "key26": "5cXKjewb8vqLeCiUHcsH6mR9CQbDSfFaaRqzHbdEeN5aNsMNdLNF7P3g134QtvoBmuUkJp6qHTG5ieMd2KmP3mXn",
  "key27": "2vHuXbWtQpziF4ZAaUC7UKtu3zBR7frVvC8q1vu1rs2idhNkfmKBSbvcTf1nemruMFgAT8jJKsp4xufWbEvDidAq"
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
