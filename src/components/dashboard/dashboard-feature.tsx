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
    "CGsDKJPBGLKNhGFTPtSRhVBdeSUQUJdZFE3X5iPjinm7njSXv4fQATRU8s73E2ZMcuyiUPBwSarA6LnmkSoQcHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBMww33tUSwnhxox1a1YZQfbyxFCzX9kYwqyumTS5k4zCtVu4Fz9xasBa7DMKA7G29Jz7UN9W85u3Esk8AqXTeu",
  "key1": "5QsseEfWKNXM4VUBjEtZFDknWG3WtUvH9znZmuMbZDnEBk5AbwKhjpb5YwiCu5ioFCoHeU5MeEzoZXpv6QhS5i5E",
  "key2": "HTS5dxDRo2Xqx1zisvRooGZqNUuYsobNDxJKytPdwJPk4cJ3VwiZbswWVRhFoW1WcPjNPBsdTKdvqdC5F9NACfs",
  "key3": "3BzRefVDmeEhkVAk8cz7uSdzJ5BH8u84DDimf6hXB2dEvWT1jakD8r8rrJMDhU4chsQcvcBxq8xVpr2FaGTGUSAy",
  "key4": "2PfP5368wCeKEsNXi9kYEcpL1tmY1zk6iEqBHWSopr2tUuJ9VPrcXRVW7oB1gqWQ8UHiE7ANz4eQ7TYqmxQf487w",
  "key5": "2ecSTYTJcj9Q3MeyKv93avaBc6yBpCKU9zTRcYDJc5zeCjinVFXk58kh3qtmsrWNeXHf3XQXjLFnWvHGz8TR99A7",
  "key6": "aW8H2GXcL9FNxQ52BumDAtEZbC4EXunzTA3vWv3VZHXthzDKfLtryQmAPCVBcdpFyyCqfivBvTgARwAc789iWUN",
  "key7": "3TyANREDWaFW6Wk4Y4wAC6yKtayxv8yq5YEiDB8f9muz3XawfsSwD47TcV99uhTwC97zQcuyDZyD2iKWQzunsxxu",
  "key8": "gbaTPy9o2doXPcQgxACNQBVzS6rCyeyoHjyf4V1YcTfQm1yQboxpBuuCjvDJ9M3pe8pwbgyvDWdkQZgnc7gyzpo",
  "key9": "2A9pbErucZTX5WFN4NocfRDswrpaGuCwsoJyUeQAr7ASWKZbGoZcEW4NWaCa9pfaPhYLbS7mnfehogsYKGb6YEcY",
  "key10": "3E5V3gM8iML7vgxPNtLbkDezWeqVTWHN6Mjtqb5ctAHdGpv1xsCxj71jHvKCTCNgrDFcuWc4WMaCWhawrbSVyDFG",
  "key11": "5ZFPxYTnJFTr4TTpGgkEKa8p412k4ut6SzWnsfjn6cqjzZcR6pkobwiuGicAgkdoK43siznHyYrJw63THPRJHqnX",
  "key12": "2cbsssSjK4qHoXztmkpXvJaeaFPuFRd5PLgcbJ6kN4myXkiEJ5TBv9K3F2iY17PkzQdni2VzferVbKmx2Q6sMWRA",
  "key13": "GYddFmR1kTdb4AaR98pyzsX1Q4jGns7w26chFWwKzuwiRhLqKAfym6fbCY3iQuUeXmJczpHrKwHwEDqx7YiLJNq",
  "key14": "YXJSRX455K3MUiaitwoMLs5VJ8iHw7Z6yNC3TnfhhvZgxy3ehxASuG93Z7HmgvdaVDmL3Z6wyvGHcRbigKLmdmC",
  "key15": "45NvuNQ7n3RsBwqDpfChYrNCvyRFcxm5VjRv7qpGd5o4s7nX9ndoih2AiLShp9uM44PYPspuxj9jASoEuGjzUwBz",
  "key16": "4TnA3uhYstfbqTtRKYiCQ3KiFsMSZ5xU5J5aZueR66anYfnQom3q6BkTKKVsFQprU69ckreUQnXAhQjRUmKUfkWQ",
  "key17": "YYdyvaL7At6gEranoVAA5bojZm5n7fpH39nG9Mr66UUWirj1jWFVb3Gk2zyqQuDEjuNeoFcCNG1C7dmpjC4xdmR",
  "key18": "5YyVRN4Ef5sGwM73wbLnMmqULbWVi5Sw1FS5eS9UuHD12jkSSiGBDAr3iQgmGah6JV77bodvZiGJ8k8fLiSpWeDF",
  "key19": "26eja9LenyeUbwoAfu7phSmEChLtHf7HPBJTDn1AYh7P2MxXeqX8jmmvsD7Q6zqHWAxLQLXSSzvdwHsDdg73gKWG",
  "key20": "3ms9gXgdNB5zdzFrDundVBRjxLyybD3qm4N4LeWsixiRcGzJGvLs4asbexJGqMr8Uhexsmi9ECBdch8dFTfEctZ",
  "key21": "C6Ze4tUdymZXDLdLhGTg8W6qTudQ46PPntY6VNUgQyuzwb2UTriUi2NdPyKP5eReqTwo6YZhQfU369efAExHW1i",
  "key22": "2fQk1LyAHA6wc79XWN8FrKeERdusYZJREx19pLAKC1FUuseAhNpRdhGrzwbLDKKDJ7X16k5WUCRVvJB7d1kJbdc8",
  "key23": "41KCM1N6mJA3yvxNSmvxaB56hP5b1SBCpEBwpkfpGzy6ixc52FrAvBoXgJwXt6therPtPLbd4z1L7FDJrmMZ6caR",
  "key24": "1cXN5zj2ZKMUBZeQbGkNt1tBCs6WFRfwkLxkhvdrTCQ5vVc5xqqhQn3dYsWzXJNh2B72W4xxtj1hF1c4ok8ybcx",
  "key25": "4g91aZQjhnRqbNjeVexeuHXfm17AxnDxywnJHzZZFcze1ceRwz42vy4vbn9iBUs2btWS1XaSM5B31Nrm4VLmqHHi",
  "key26": "AvwBs8m4Gj9FBNkChhqjoC2Byp458SnD3pbatUidGJ2Fid3LhA2nXNSfHAXjMpkVbBA6xJrmQG9FDKxWMoUdzZW",
  "key27": "5AmXpJzYWJTcqLG6ieyN1Ai5QD1zgsoVt5juRobBnDENqtuJKfqE71wzFsTiivRJV1VdL6Wo8xHieNVV8Vsztefo",
  "key28": "a4oJGPJSSxDBjwUhRufCrKmEq7GZNqTvTgbcNCMbiGdTM7ivpMLHEHoWm1jk7hcnAD8hsrziURejGChFjeui3uF"
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
