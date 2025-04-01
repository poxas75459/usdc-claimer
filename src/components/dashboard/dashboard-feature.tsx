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
    "289RFbxavm1prEBdaMTBR6kA7oTixpM2DmBioChSQRngZmHf9LswTzJLJAb8LUeBuD3f2jiJBfVHUaKVzoTm3yqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q4BfAbtftojwpvs2Mss1HQEW2GhVhK3uNP1ZDhGxBvS2tU1CyW82VCZu8uUzpEHwLQHBeMgaDnUBnijXKB4Zgxn",
  "key1": "3z5qyEbC1aKtztp6nW91jciUvyZr9jxJnXt4jXuAcu99VxMqtHtfbhmwTXpH973xQcWVtZt4kGmWfPNq8NCyjebG",
  "key2": "Emj54A9ySydwAsVgMYa2uoUMuEBQnDV4ho8rSadnzwSL4mSintV1LAHYKqMW7cBCAJ1uf8RdG4EK4reZ6KQmG48",
  "key3": "3Jqj7XBoLdhNpuMck1iqom7kx9uQLaSvjMmCqHFJsLoPKjczgsztvfhTeE47yi1YcjuD2WLgqs9eazrsx9GuLy3Z",
  "key4": "2UWKuWA1PGdmVGH9wj9gpLbVeJTNWYhauF5ocCK4Pd5TuT17mRj2y9nj9BJLBspgaDQMq4CV5SFAAxat1RwExKBj",
  "key5": "3gxsDUiDDtxv75nFdvW8Mxaq4rvxbavR6HDTW8XpCgcpCMQeRTvRPfNhKofzN3S3HvzJyLNKaz1N5UnwhNvuCuYk",
  "key6": "2iC5TjLYdkHmvFPeeun77LuLmoabHcAw11SSxQBkyUC5Rbnpa3cvudFtkcc8akdu9hjKBPhUFcSnjV4ko3T1BaKG",
  "key7": "4oYebG2zNr41qg7Jg6iNbtjrs5AWTRdyyk9oJHSoBjuaYxLzcSfnxiWF2ZEaiyP2trrs7qWAysfJjyYf1q9zcDe2",
  "key8": "8q58StbuPazBHxpyUQU1j4VKXo767kmbM4k4qrojHXJMvWwkpY6YjY2WWVpwktRnAFoHE7kj8j1j3GwtfVHSki2",
  "key9": "5DXTfBxvbnxmGD8s9BqVTXshbA4e1gitmcP71GmWYGrPVdgPMNG6S69BVzaJJo1e9E5Ty1D7fxWUmQYh6utTfwHx",
  "key10": "64YCSmmfmfQbrGRuPnmbEHuRDMjA2ua5fpUmwqFvG1E3DkT2t5T7bhNRxxEdReg3RWviEbTCamMb17Wd1Jujc5Y4",
  "key11": "3oPDT2nDxKuvzM4EpNSew2YYGmGy4tkyFJPoZ5UQ72MTS8YanixXJZRSATUSR8oZfb8whe81VKGYFuzLFVjmUea",
  "key12": "2cwLbysfEaBq3aXWrx1GEgSXC8SJUYpgXdXb7i1LBz5ZZ8F8DFf3WAfaV6yPewnBiJJNYnZhCZEPk8dj3vYdpprn",
  "key13": "28qaXCNyAN92H2qux7hMjvZRCNo2RyiG7iWAKXPPdoiLAbCLXCnBSbJXAL8DreZ8WsHETPiLnjMwwyQkm3jZs8jn",
  "key14": "5BtquGDCLp6JxEhECGorcKQuVLAiY9RhtEWR1rqTni4YRwj95Vtb2DLhiihK6B68Z4J8xKYcBiNZSSNXEn8PipWW",
  "key15": "33jmdBvpQpyumExmDDujC6fQdDWNZv51pp7rbT8q92NxJvQyYekoeVGLuXupgpPgo4AxmMBLnP5CnCRtYrkXkJ4",
  "key16": "2tcrRbJm5JyhFmdChzVcvBy4GBpM93Dkmm7u4YC59XtSNorcPBwMxdmg739vnUz5v1YucABrZjp5wv4eaastXHut",
  "key17": "ZEAdTfU8eFDoxqFnDvEgAxU2S5AFPx3nWiVLdvXoUNuCnE4RVSzRyb7hbDekeKPc9aMEqNkxkFmw7p2z8xLdBS5",
  "key18": "5E3MFGAaX95GtNjDikYESwMjbgC5x2np7X7zd3m5AZ7uKWouHWyX6eZr2HFAYnYcZ49oWS7LQWc1zAySdasb6KRB",
  "key19": "4GrYeQueHZkqMZ34SubjHbmxLrr3zUGykzBA8ESVr8qizKfWzFo2eUaLyyqUUv5ciZ8gg8pkLsgypH7m684t4aKt",
  "key20": "4WhmmmkVotNqv8FichwPt2hzxbkM41g8B2F9Gtf3D1sqJMCKuhyYtXpdCXQiZG1RuSsAUJZBineyuBFDDqGzFT1M",
  "key21": "XDpHoa51aoQs8htT6DkiqvQf59MF729pDufNq36QP79FtnA2ATnfh8S3VqHi2oRabDepHNR41Tqq2Ps5DmQ2dbS",
  "key22": "2LSuGQEEDF7EA1kEfeNoTWVcqnPi3pCNbHP9ePGQN3j2skgHNKEFRXPw3GmJBVNcVQme1J42rb5WHajArW8E9BXe",
  "key23": "4HzsAecxH8KRC4aT23ovgUbq21e9nWbhWT7socZZofGX7tPFvQbQWWSzCYvv9pwZbLoBTBRRVrLEJC9gxY8jQHL",
  "key24": "F25YP9SQdqTnArSWhuLB65JFcKKmdgUb7qmowSmh2TCTqDMH8RAW8PaxBDZ4xnqxG2eZRfBTArRFngmibysfmJ8"
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
