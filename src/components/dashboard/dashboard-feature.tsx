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
    "2Qp5RZSKr188AMRiXVMdE8QdeBvCxRpSzERkYSTuHbvBMLXNVvZZwJeJwhyN2bGmrGLCfF43ihGntmTWiNTWiwyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42STEM4wTKAmAi7Cn2UmyNW2LRVfUCFcE1buUJQXLVCpihX8uxi8jckvgsy9zjkzxhMqivnd4Nki9qxj3d8UYj3q",
  "key1": "3ud2fTLZm3junwWkjwoZ2sUESGJybjtFXtHVRpEbvrGfSfuMxY6D5kBdcFbdyRW2nUvMCchx7NSwTGaW9fNHygm3",
  "key2": "QRPygvoeMFXMkkKigXcWMGrRi6J57E9VBbtCh6EDp7VS71UudsmFdELppTgJcmdj2qePvmeQ6fUAZcUeDRzpXHB",
  "key3": "4wjvGxQBQmgfLUJgqvjWZ2HCbmnSA6ScjNSMCP6wQz9c7aCQezfx6JHXm7AvJhtNRa2RZCFpykUV1PXvahGoFkgZ",
  "key4": "3woRuocoGqc1SoWfeuw5BuSkDE1ZHx58tPM58o2ips1R3ssC8WmburxABhxaaf4Yvru9GdDBdCkH8y9fnKo51vSv",
  "key5": "5BjcvXmiUa11taGuFSiVUjGi1tfSJzqwgpRti3is5LuWfQG2in4exEjZiiuTnd9Mk6NQt8u7ZjQSjAN1KwDHUSnZ",
  "key6": "4PUJgwGD6UjQkMUP3EFGLXiNmeSwVRk7aMpwWBUoHw31f2X1jRuVozikKErL1fpLumWmZf8uBDvYQBEDVtKczvR1",
  "key7": "gCYn8pJSAq9LsGzVovNFA4AvdCWGaGRuSPTnzX4jDZbxuLQPbAxxQp2RkLSDZeRBqxyBQkVVf15EmZ5av6ToW9P",
  "key8": "4jEqcYupTDew1NLYAfAZMSM8FjTLNxg5bYkaNsFaS2gLbpWD3kDH4wxFTrdNNCeohYomQqgRFBiDSoUKyXbGxcxC",
  "key9": "3kiAzS8NK6MR9329kaitCVv1U4HPZp9WygtjgojB5jQ9zFN2nn1AgAysjJUVSkTw3gam9PVohKtYL6Mj5Hm3V1Fo",
  "key10": "3tSa966x3HE8oUdomi4f4MKZpkKdRViy5524jpsriAQc2M9jnAdawms9AAuheH5wua7iqJzUvLgbhp2m3hAJYfPJ",
  "key11": "4TQ56TDhkBCAFHTURSAxxJtzfqiecr84YQCcHtK5TPrmizK3RZe3nqAEtrSMwpb3fRpvMa9KMoFw11oAfwR5JUSQ",
  "key12": "5czRqQFbtC5mZMEMNVX3qxnGkkenDHpCRa943azdviePoGBFwf8Eh7YW3VpDewcrpp6CiEwbLgjuJ44VoeMeyYKB",
  "key13": "2sLf34LDUcHdn7d9zdDutRjyWppf4WP4SKXa92HkPt85K9mDLygizX5EMTdrD1iQWRTxHzomTg3y1YbsHaSAsofi",
  "key14": "4Y2MrbPLyQjfbXwXQfsGw4X4JazPa1dQyZLzJ51uui1VPh7dbC1T86vsU1nxF6rp3smQHPPYAu7k14gayhUCXU6Y",
  "key15": "44RpG3CdE7m4ukCYzWV3EcfD5KdpnQzd9FYPMedfGvmBr5dZKPnqDY8N8Xadrbkpn1p4LcVJYdyBHSmdFbHj3KT8",
  "key16": "3fkK5gyz9ipTJjDqSkGo6EaL6ugPLWJv4iSjoXkoE9hqhmFZ1ToAmFLdv3yNFu7RQkxfp6Zi7vcVxM1GaTyRGQbD",
  "key17": "tApcqSXyXzKhEYumWjfS355PY2LvnXyyqwiTFZdb885YwwkTorKqfJesdRvr6aJEByH5AAjKKSJnmmYbhvMd5Sy",
  "key18": "4aQHJnGCH22Cb3JynuKoUDwqqDqw1vt1LqL9NkDuZSyE9i3tQeSEeTdmThJoA3Sg9PKvr12KbMj61wFJnM5H3obu",
  "key19": "5gS1q1fT7K2wNNxwq2E2tN2AJDa6t1KiHhLuTfKZF4fNnBatpdNsYDQMqk9weNFxDCu32XdyShqqK6JU1mBVbjjF",
  "key20": "4Bc514GcvZBQHh3P8fQ1ZcaNwdyNTmU9vCanBkw1G87emZoKtshxKPnZJo8YA3z2NQSHhJVZSbcMPF82thCbfgk9",
  "key21": "66suSHY1LuWTdMP8FbypWBoKW9v5x3AtTEqqoQNPYQVvU4tBMZEmKmu4scrNGvMJSLa7uySpLdqQ66EoJ1jxLCSm",
  "key22": "3g5ahbQvzCfs9yaqeXewf9g7be1NjCEj4tUNYHvXMEK7MJcXA4qAogdPZ4khgTbixChrbHxQANPUdqyDqYZGMMjt",
  "key23": "RDjnA4FY5S4q9Lo3CUheD7TJdggBKpcQEQh5NXWopLC2g8nPPNrccG6xzDd2h25pnDrjeYF2BS5nPeSFw2yj6pc",
  "key24": "5LswXBUveDQM8Hkhiw4xwpxnioHTn5AvhYp25oN9Wi2tV55ZAVGFqB5TUzq5N8AEKXazYhKqiv8Fz5dxdqM92S2h",
  "key25": "5EiMvKJVnWY6eQRruUAwk42CKKSsRKPhLXQVbx31w5v7ixwQWYGKn77NRtpKgJkW9kJL9AEADe2SjXLUrUrjrTdS",
  "key26": "618pvUN4dhKWhcesr2aGsQtmPoJ8VZm2c9EDdQuZL3ENsn19XT8CA6wK2CepWQdg8jYxwjynovqhSywhw7jugL6h",
  "key27": "2fKasRioJZ3Ejw68bGJ1Vk1ehdYRMf4CnF2kutEaajLjfvYBrnoNbdhJTAEVNeNpKDM4HF7azQZfb2jxwzNp5LRW",
  "key28": "5CPYLZ9xCe4wUVNmGAG3YuiKRAWzTWvWztBVUuB9zmGHK1ghC8RRXJYEqksEVfSMWxWo43E94CK9eG81Q718tiHm",
  "key29": "2ckB8Sbnk2zQnrG17RuypQ7zzhibpgP5EUGjprgsxdqXjUqPShjctjAnwThvQAtQfY65jm4sqJPbrBPSa7e3VGYS",
  "key30": "2fmx4HR98BzyTSSFTxVDZ3JgXWkqbVBQUGvCnm5A8afEGq6rLso7qotNjkapHcQTqvRn1GfF73mWEFXfqQCEvVqr",
  "key31": "4EPW2jaLy7kW42LAP6DRzuhk5HJxpMVEoHB4Z4tXHB7XvFboZgj99TK3poLGCpui6J8YPmK2fwa5E8cbhQ6R6wkY",
  "key32": "2Y3i9SBEsExGbHsEi9rF8ZGAP67SU7Z7NuTe3HSNDHTpcuN137AvbzLuLPzLQXmmNVyi3PWRwY2bzMKSQTmRT3Pr",
  "key33": "4eD8BvtRUXvsh6QbLfhYnNvWi3RF2BQxCKQ64tQseu5nCRFcWoJaXUNv8YE7cPnpTdtAgiJNkP3fSUsc41jtCmsK",
  "key34": "5Ns48aVY96tuRt1nR9hAWVBAyg4G69Y6pyz6VTeJaghuhKv18uT2UuhMHRAE8Naufb1DqwnMm7WC39bUS13R1BXu",
  "key35": "2ipJPDNMqnEoE39P7rFTQ8UbA46XALGa6czpTALbiRz7B17Q5p3U9Rcu9h71PX6DEhpZkp1nx88XZf8BdYQrzc6H"
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
