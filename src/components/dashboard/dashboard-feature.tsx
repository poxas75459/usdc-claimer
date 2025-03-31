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
    "2X6yRnKSGXQqxo1Zku8PGatKdBShmSSmKMCSgyBcem7PTeCgNKckt6Td5zwmLctE7gE6nr9LPjYjh8fxBaEjQYEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZCagtf23JVE7tJhujaNxxeM42LEQJVD2bGQWbqQSveQgM59LdfBojLCoqSNr9LQxcE3TpJUNG4nVAKMH11o9Yz",
  "key1": "5YTq2L65FE43HECntm1up6UpdWy7NwQYpNHx8RaqMKp1pc4j2yxdjfJ1DrZHaZzozqU8vtXMHRYQAeqbd8PtpP2s",
  "key2": "ZEaoPzjd1289gsVhicRo344bjhw1hfreyuJRwhwXJb6U4gVwFWciM7oU9cMeVSY8PiyWfXz25159nJtUcQ5XESM",
  "key3": "592ebBCCMB51BT6oZ3Z3B8cQ7vV3c1SoGdih9CZmMtaiNggE9HLyPfuwP9KUJNbaUXmdjSTc5PsVGGo3iwp7uPB",
  "key4": "2cdeqP2K3qDjzrCHqqp5wKrjnFK6hZ4JCK7nahoN8AzkVJvpjchfCwjeomQEsJSvv1mfzG1psnWe6V1fNQcH5y5h",
  "key5": "5HPN32okH4754oaN5GxUQfRXxcr8bSkAavfCzgCjGGz5aebkyfJxtKMcL6X7TvBdNPGKoVwD5Qrc1tkngyC2zmFT",
  "key6": "LJZNPEX8d5RySp4QRcEH2nVsQkyZxSXtxiNXfAC8TmrjSNAso6egLcD92qe7JMoimJ3maRMXqqYdNvCaAjV9v31",
  "key7": "5eGQiExJ5vf1dF4AtiGbW1k1G7Mz4knBpMKUQqTXuRbmyc45mvYC3Pa9vCtQY573eA9H972eHWVK3r7BoLWWAW63",
  "key8": "2jTfiTyv9wTx1LmQ7P9RUpPPLzKfAXazEwnEnx6ccMhsoAhqz89fSDqBbKyNK5vWc3WSjyEeC1YSqowQ6Ab8uam6",
  "key9": "2g5rSfsxyj9bGACZeXGUJpRNfgSuinY4RwwEG3YNKDR3J72GSvbwC6JfoeU9PAy2zFBJhkJQKUdCAMjwR7cJjDD1",
  "key10": "47F6nHePFGH8AJyjwzdHMLxtT39WLBF3n15ssMY2Yqw4nrzVarQEFWPKDAucQynRqTbH1Sr4vxUBmfcUu6d6e7iW",
  "key11": "2nbaMaV99wPbMU9YGoKCcGw9K77LVdXUtgzbniex52E2iZTUhiy7x5iLUQBohbj8hR8V1ty1jKZYmC36fXigfgfg",
  "key12": "53ZrJtEWDTgxX2pfAqKmwUaL8QfwFCbr2RyneanhhG59ePPcPxALPEYyAHxVAmRFET4xEwM3ohMiDH3KNpaNnZNt",
  "key13": "4P2nhB2rTqx3AKcDJRMqG8QDvdfER1DoVnaMCmrVjNCaS7tjw1jAniqUWAWjKKDAhyAtAURdWXYvW86E5sGcpjGi",
  "key14": "c5AGXw9WduW32UJQaG8SdnRxQSi7FGEguMnhbzC4LFKaVwr8fqpUNV1aEfPzGFPvQcEUnCKjFGnJhUt6qK3hweM",
  "key15": "3HdJkppaf1qvBQBhh81GGA9ECVxn2W5pvR3VAai6UVnhZ1eH3sZRexxUYZ6JxFphshxuLcRCwFZUJNSqUfFCF86S",
  "key16": "5jrhth692dzSYCoDDFcKyF2yyziJhS4rB3ej6Y7ZruGfNQazGLbYKfeEi2VDoepRvaHd55dMgphkdPrbA2SSuxpG",
  "key17": "33bpSWHvodAvLpTkwjAni22qNC3kydu9AaeoTCFtSw6K31zSGRy4W1sWtejtUMi3qdX7TjxxHhmJcvk9xm1QVyzY",
  "key18": "5P5VDkDSnLP4pVaVVmELD3iwQtG2XgS47r6SJr3frPxVmNitvGN8VHqmAS7vrMornXPF618s53x1Dy2zLgaaVUPP",
  "key19": "7ceqQj4odNaDHKywyovgo6mb3PRkHK9VVNmVpsAxG6oZTQp4MFAdkJrxBzg1CSV8Q9iL2QK7HaQ7121JeF945wW",
  "key20": "H2VWF6oYxKHBvd9bn9SisGt12rXNtBbFrbea7ecK1fq381BKeWkuzPLn3atQ2UPrBGjkp3R3KaHFBjWAKpgHLFh",
  "key21": "2TwzTiCDJZyRFCcCHBDE2FiCfz8t1VTa8YGKj7SUCTpeTLa59HjRX86BzEVRd1gKG83hKreje9SEzGm1ZMuTkTrt",
  "key22": "2GvZzgwRKzrLAmE86et6moK8xupJzrZNFLKB88WNVrWFBjss3YLbbbvtDAVbsQXnEUdVaWrcpSrXejVtEAgSJewn",
  "key23": "3HACHbGK5rn3qH3pAwcxYjWcoambxcDZWKPAoaA8FBvikh1p73a7UgWpcJHX5pydNyUg8pyn5qhQTRSMJ7YUpWBn",
  "key24": "3c7tx7eHxuRdktHoyZDhkPxSFwnHRnkmm6FGjkZ7GVDYP1vGHYeEa5cPfNwSEBpihC2dXXmuu9JMS44BiYA6AYWj",
  "key25": "3E8kR3cVAyLVdMEprNnwmPXPxyTaTzx6hdyb2Zfwirapvj1XDAJFWvvJi4HPZGh6zLMSSs7Zt2xCUX63dbRXrv2E",
  "key26": "5Ak2kWneRRpCApjbedfikqE6TVyTfCcm51iSsoSTrWpkbihZV6n3EqMKmyuAcZFmBxMwRWtse8YVSf35Xm5CMMAB",
  "key27": "4RCZBhSY3z2EwGKt1cgtVWPW4zQPoo9PAd6XTXCruzYXT7x975rVmgysojR8ek7HyFyfJLb1fYqqGSaYV4t2ogk9",
  "key28": "3amSxQM1QfuhPdcXtnaFwQHjaVE6yFGrfquhy35XzoMwFzMNjx6nymcGWzHnD3gwqkTE3DtZRCYShnqKpc3WkyKr",
  "key29": "3p4DqgTxrkL3dueJuVR4cwZ3NKP4w1wFsowqerq5u95tvCRw94F5YfXSActRN5GYkA3wFGWvbJ8mG8XSYnsy7Hqo",
  "key30": "5RS4mNuXhqxB6yFv89uh2vVdJW2TTxs9dGLPuAVUa9WLwfnTvvB8D5LpsQphwgzg5SMMuMjyjKvr2D6QFNH8PCgW",
  "key31": "4sa8sQLMjHkRMU9fHruSFuhYfRYEwgeE4pk2FBvePUiqYFjLQYfVk5i2uP2Wx57hVk4zLNZfbxs8m9hfhAT3Uo4g",
  "key32": "nGauvz15ehNDCn57qExia8FqwirXKMdifbe4uKQSK4vPxqzrj9qNcwnd1puP73Kv3637WWUFe6TjdKyksKVaiwp",
  "key33": "rYVBDg5p33ZHFN5x4woschpYKsKaMinNMf3oFneez5sUEq5eKkBem9UV5TWnVk4SBHVzhDMk6JdFzhoWrVdfHkZ"
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
