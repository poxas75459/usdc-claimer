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
    "2DyUmh2Y7k9fqJC6qwgTiRobveHMEr8L59dWAFD5egpkJ3g1rCHqM3T2BzTGrYRqis6Ws4VE3weQPh7zadeHTtye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FY9p2Fjdchy2ukRqn1KnHt73Gx3VMK87QsTujEXpAjRBEdu4ZBzpmwd5VR7sFapnnaZqSnYLU8mDNSNUFa3hWKm",
  "key1": "2HreMntfetcXm1wTouvALYKXnV9EqRBgQ4ufa7nE8bcGjQCLj1Zu5u2kAQqyyeeVkxoC1wN2C2nK4M857tjnDNv3",
  "key2": "28h7VsEwLjvtuqrj1whEZgbvh8eWYJsf29ATmKTB346Qo7zZyhAgthUKeAJsN1NZv2t4kp5irJ2YNz6DTpj1j2At",
  "key3": "44RVkL74HUxiwLFRUokGiMeKQKqavobFPKT1BaG1FDYJChUd65gxgMF6BgFNaz5tyKv2vUsr1h6UeybUMc8wFbAL",
  "key4": "3bwn7CxdyfE3VJ19jUGeNt8bBDKGQ6yeUxdfXv5zhDtJ4jgHCGVuvLAzPqe2CaV4pqQim2GAsfUZhMA811Dv68we",
  "key5": "5votEr3byaGRRr7rUy95qTgWXDmRqKDCELCx9qS1YWMUKkXx4E3mNq48AN8To2oJxsD7tqa8mij2KjGhd8debGGC",
  "key6": "5L11uwL3jZJC2UpaEDVQG93YTsM4irXXRkmvjPz5wYVGVZmSMRt8Km9UnChBun16yZEBe7qtG8bxtWKQRQtQQYrs",
  "key7": "4uWqWbrr2vDjdx7QdQGUf6KXJYNGQLMzGtAZgvmcFyvNGrAHbLQjSpYFFQrr3Zbtv139XpH9BsCERWQ5VX55AVTQ",
  "key8": "262nd3y6AtAFjwwyQqsKuEduJ2J5TE82Fy8CqpNKyRJpwHFnsgR6NGDzFEZgtK8sMTkR5dQNZQEVhNZUoTpS3UYM",
  "key9": "2n6NaoMaNifStd1n3PKRXnkUi81CyobBnqiqoymmFUewVmJTg3dCMkX991XzLSRqk9P6FFBUAUBPiNaMbEy74q7J",
  "key10": "5Gc5VCkWXVvSpPjkdCCJ8xWhkcVZu4yxD6XtKGYxEiw21aLWohz2ysNX4oZtoRFGRGuLShdpgyEUJwb74Fn5rnrg",
  "key11": "2FJiTstPJdGLuV9TZrUtwyrrw8ZYhmgtBAuJp63fEs8dNDBY7a1bXMvkJn4hGgZvZGRhMDc5c3oC5g6qTjZX6K1H",
  "key12": "3X1mtVULptZz8jEtRhZ2AALK7qbkv5g6rPewvV4VABHrJwMuAD7oUnmRLR269cJi6hx2LCStFSnaxhfurA1d1g9M",
  "key13": "4tvqGjrtE4EHQwzwUgcgGrGAzEV9c1gEUq3YHzGbqqYmGSCPAKmVjzjKX1PJzgip5EyoqYtVKrs9D3barSqPmUSw",
  "key14": "3X9FYK53PhpimoGCbevNnBtpS73NBfqPgnHMTiKeNhxKXZ9RpvnhaddquDuFyuS6KarMhnsfv1LaDpHfb5sS76wX",
  "key15": "4jdziS4ehPbCRSJaNEdfbi4HpAh6ApxL6Cz8g4SoxSbKEWfYmVAjLJxMsqZyvEjaYg7VPMzTvCC9WGC92LCUfgrZ",
  "key16": "4Rqet1uJTX2iHPqfxDvGXQds859VvXCUHMRYU7AQ8dVSz3DqRcQJU9FSHjADPFXhP17mpAG3dSWxtna2m1YDhquV",
  "key17": "5CA99oK1ekGS7N8tdBiNB5HDEeTWf9unhE82XjWyGcTZgfpf7TdzhiQ7dbjzaoLFpaGzEq1ETrMTRL3ob51y7H9T",
  "key18": "gc9CaD3iPZW2ycdL8M54eK4Xqsn4fxsnTiVF7QXTzozuH9sLXrW28DUgfF3c9J8f9vDXjujsX8nDe7odrquu84f",
  "key19": "4BttHuD8NLzPrMCZnoqaxc52DcqmskevGCttUKWNbNRXQgwJ7Uz4C4do4tE9M6wLTehKvhiEHNfgkSnAvsCdUARW",
  "key20": "4FsBV3QjvsfiW2Rgdo4NCA9jpyddoMirjH2LStmGgUtj5kFM9esCkXTWJGtNbZ7sWnCnyahWzYJnf1mX4RHRWXk",
  "key21": "2tpCgqAJa8iQM7yE5BNPNGYQ9G4NCLAPxZQY6Vsq1wkrFvPB4RY5pvEBvxeWBVcvDcvNX4HiuQVxm6JSJ1vzyoPp",
  "key22": "5PLo8fgZV1Fvz8MXcrp6W5gRSyQwiKktkdZP9UtPsaJofyGpdSJ7m2C6enX5ZjbmACsRdpm5xTobimrSrNP7dNSN",
  "key23": "2miUH2pinx7BqJ9t42XqYnt2YnzotDNkFdUdGGFETZjKsvcTXtQs3ezYj9gk3TsefPwjwDN553mmnoY6Guw4JiMo",
  "key24": "57JhdWpwiuipwCYz2nvXZQiGy67cffSRx3bQAUhnC4yyzQUkzwJvLxxHQ3YRavqfnf8o8PRxNGWihts5HJRDBnJq",
  "key25": "4JBUqfWVwo5GyEH4vqpdjnxfJGTXPksdqTebGkM1xT72kzPcp5mKCRjqjKEBp5GDtBnhyAB9knhb4K3Vhjx43HhX",
  "key26": "2HGpZkYjj8Gan2zuvrXVeAzsbeCbfFzwRiueNoVAMxuZo2a1m5AnLg33D96ZdUEXRBJF6hy59aXbZw51S6dkHq2i",
  "key27": "49rVScF3r8UNyiJCmNuX8HySmwdbK2M8QijcLGmbuG3MHwzxmKjztWmm99c9VCExVorWQwNBctrn2Vj4dnRGxbp2"
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
