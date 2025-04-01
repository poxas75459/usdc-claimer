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
    "4a4JcKGoybn3TYVGnpbH1DCg8h515bXYJUMDeanCXtgxZTtM8izwccVZGHN4NLRNSjbpgPPiLzvjPWheAnLV5yKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oGq8EevdiMo4kKbNQvhjz6dJDFQu6w8knAJGUnRWCN7dX8mRUdM68kT18hR8gSxxU24khqFMD9AX8u4LuZFbkdx",
  "key1": "E7ky1ZBjFZdSNUCDsV2uK5nwAijzxPt8QiWGHG4AxgzWXP3FyPP2RSKic1Y8zhcCWf9PGJ55yUQ6EBcWuH8Fyni",
  "key2": "2uTw7p1NkhisrGWoj8zRWBNkY29rLXdv4DUBkwU5H4991fbQTfCiyzyqtXxrJty3hYiAeQay6DaDvKDuQBZioDQj",
  "key3": "VEV1LxwhGudb7o8YBh16gPy1eRD6yqp2ZxWGgMRWCds63wghzdZc3dVv4Q1Vsmb2ZpFXqEYUNS2gYLZ66MgVCSn",
  "key4": "H17Dysz2UzfSMUL673QZr4yY3qKtccv7gkrPvMBRxruuWxKHu1FEoeRV87n65bwWXA1jB1SkosvY7X3i7T9q7hG",
  "key5": "4jsJupdDPq2Jz3gVLt3dihtz9yncW7EiRxJgBeE9JvQK91XRAeKtvfN5QdKUVBHCQJvB4bX8cJz5LmZmokhhMc4W",
  "key6": "Yg4Gxu4bWji7wAJcG79gStHRs2MjCQzEWchJfSsNq1887WBDwBZbnBbMGooFJJL8GZ213PVUdHRyWcbGvpQENrg",
  "key7": "4Y5XMZTijxkcZgSa47Q6dA3NU5uxZn2thM4HQwpWxJY1V7wA6qFpitRDEBUdSnyVq3r8csnimaztjRN4Jbf32mS7",
  "key8": "2iabnDc7pBeZU26xEnJA4yJNPMwpRY1WwmixzmNkANE4LeNXZXPzWJQ9y8gWiR9pYGQRJAPtRrMoR7HM2P8zoyhH",
  "key9": "5CcjqBknhrCp5UHWpYUQWWFy341UR1tDDnrBALobhqNPBEfzVsYZ5HwYLXVkoGefvs4qYg1RmyXcXfgYAJNiXC7F",
  "key10": "3qWXaQdQCzaDhzfKTfpSh3EHqicAdGmgv3nz18RsVQzp2UbAtV4a5aDmXecCr62nso3aNvaBYAAMA7uwydVhbRHb",
  "key11": "44fCnraQ5Fquyv2zx7tYbrjpcSv6o5QEqxKvq1NDsFQswxPysQP2orBuRmL3enXRmaE5zUvtYV3LKM9MJrCuhDoi",
  "key12": "3dz24mp3u3KodTioRj3Xu5CC38PPQET7jhewNrx5UqwyviXn52s67E5WE1FpXMJEVcrjRhpa4Hh9i2gUQvVrjYju",
  "key13": "jKSTGuM2zTRKNyoazHMGsTZRdjArDrqV56JiCjfpmr7wEn4YRdTbUhBep4g711g6SqrAUdMBf1rR9yuKqWGnHB9",
  "key14": "DrqNM1De6Qi5Bh5GPcSpA3fFAMPTM4qmdLXx5WXgQJaq8efUC4MQoXodrAwQRk6ZUaLDUPJwDgyZ9dqwxNarNFd",
  "key15": "56Gc7CwBxiZ8ABHnGCYQ8nS7BrVKkoztASDkVYWnDhFYDuYdDwoaFyoRDoDH5fAr5WCK7W5U6E8E2K9cmgc8H1qh",
  "key16": "3pczNfaw94qtxcF5pq3TApWhMxPxcEm3JVCxF6AbAVVVEjzjHt9S38UZyQ4rhDJkCpQLmne84n7WaetjBiTEvZt6",
  "key17": "3TPx5bDwoYz3JMXrWYFQv41iuYLwCh6AEmXnqxhmiTpRfVpYvbVw6dScFegse8hdMVwsHSJSfYXGxohUfeGGPzt1",
  "key18": "4XoLEQTmyEYT1o8CFjSVwqwmBgoVQdyAN63R9xw1h4P5qFEsg3W6PFbjDMsUpiekytfsN29nBBhYBfhMWB1CG12F",
  "key19": "5dZTP8nUqTJwbriDENF5E4VXJv2pHnL4R6VpPi7BgaiftyZjsYDuCyD2Xx8UuDTGkeagqSbd7kSHgXDXSxnTz5mR",
  "key20": "5wPemcW7vHviJWZKyNS76UYMdtuGYtpRJgyoDutmDidzoJxNHHEhnRArTj2Fsf59jq14C4qCynipzybJ6gtHfS8n",
  "key21": "5vpECQ1whmxZqrGYdE2eAHAe3ypr1vS8emvMYWjDVmUMkC3zhekDAVFdnVAcJc6uKir2sTBa61MrqVB1A2ab7B3i",
  "key22": "5krBtXZKtyzbRUydur7qbQy6tKrz4QikPMZzNiFR7r1ojSGweo1QiirfUTEHwy4GRXSihpyzpLsRrTPdXDnYEdrj",
  "key23": "4N6PBiT66gmfqw8YfQnC36m8h5pCLTJ7rwRSPLeQn3iHHan5z2cZHFFQ5rxQ9kkHLtn5qNYruGZtBQ9L4i4NH9cZ",
  "key24": "k4s7Q1rUiJx48QRxtWHeANXGXRHWmTkhGEBvF7mYhNgcPm5vvHKRWP2m1dgwJsqDHz3hY2TGmXrzoUtBT3HzwUF",
  "key25": "5JhLHKxhSMLTG1FM4exuUf2Ah77wogBAbmETGARtsz1TCR8wPtTVgFpPKsUipaTT1u8sVsd8ofvJLbDvcB8HEDSU",
  "key26": "3ovMYTsZ61gdjxap7zbhfsUiJx4oAjJG3rcYKLnzpwN48UKorDFWWzKPVFqBPP1SLbxxGS5x22TFsHwEHZx3wyaq",
  "key27": "2WWMshBaKv2NafxyZsBVSLKg3D9RpivdJtcWxKff2s9eqoxSruFczd3B2RDX7ueUeYNr8sEpobBpv421QCWxCPCh",
  "key28": "5r1a8p2hF7tnTmFn46rFbG5FKDyGymudQUt2dY9BrBeNa1ZbW6MDFTEstbPFXEBuMo2ahGPz9fG32fh15DdWgX1A",
  "key29": "5d4whoCTTri6J2h8HAkCfv1aDsfJf2UMWGb1e7iaan9cFA71vZUcHWzf9i5v3ipx99vXJAZtDBNTjHWTRjVpyNhR",
  "key30": "59Bdgd8WHGaaUaimTUcV2ByQKnF8KhoBgCJe53ZTYA7HTNNyAMJXNqLUdtN1YkBNAHEVvEVHTPXVHBh2mZaeEJLB",
  "key31": "2JdaJFDWXof1Fqv7HiWob7F9py5T5gFwaAS74tTGVDWVDDMuM8vsh22exMzvavxWm7vomasuVgKfvxJQn45EReYW",
  "key32": "2wCkkJTHPhomAaMzwo2gkTShBdfpFJNqK6DNGckpFA3TfDxS2iaKkz6MnNiTtEw3mMNiFyz8wfp8rECYG62jeMit",
  "key33": "2JGeRDpy4EYP2rJGsMNj6QT9qBVDGT3znGC1ovfvG6hwJw7eq6eywRRDHkiv2QDku2eCXYkYRwZqH2zN2Tybnidd",
  "key34": "jXCcqgmSmNkbwiq32rDoYAzUXmdkiix7c5WTETXvnTC5PrA3e7DpaghPKNQHmC3ukdJ5bpC336aAULuQC9JZR15",
  "key35": "4gFSmKWMde37HJNmwsvtQFeiEBkrEKHMAh2vc8nxmz8DqY3xmk3DPCWFWPo4pHmFGbSwvgj7mX2SCy7gQ4WS8Bc3",
  "key36": "5oQrivxCnwbkSSsPDj39bAaptdCqSBWqu1pMTnMuYdT6hoh15f3m1kgQkNNdj4ar7eJV2RncT59c976RH3Z1G4WX",
  "key37": "38EL2htDbkCMbX8U7b6FdU5G2eustDMuhZ3WvwzLPSTAG3paFBZea5oHSBRLTTQy9416xr3qRxEnerb4Hv2vVv6v",
  "key38": "3FmCfpSZqnZCQsrMQnVqmSJk1DE9C5ggHxpomPJ9CcBY2KpXr9C8txmjgoX7dAz3bdmRWegsR2qfPfxiHQbpBYtw",
  "key39": "2ezgViKCoV1nsq5mos2uytXTdz3q8TBBtKNVFJUW9vNqF7Zxr3LW3uy43BgrQVoNzFMgTzVAR4wz5bsT8X98m7Gk"
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
