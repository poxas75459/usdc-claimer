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
    "7VuMeoGKcx93HJ7Q3dBiFrMNvW4PQfpeaqMkvkD9YAZhkXYkqkB3NWAng9bKQ7usYQE8qxvLXzUBdQzqR6Reimm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cZd3hEmvHRvhjxJpbAPPSDXoMV3cmDiZU4F88V4CPMRcLNQz5bp1Y66qX1KC2KuCDioNyovVpG3oyv3cVnHc7gF",
  "key1": "tBFhF7ipSxcFVKpmqm9bmhzX5kZ7yX2gjWf1XCtH8b4jbPvXJp26xjArFiafK2TtnBZdicgEs5rCzi5VdRF8D3j",
  "key2": "2gUFbYBnJUQTWevA4GRyHezy6UNF5Hc7KnZ3Pc4NskcyfSEe23HLBU3ETHtbrkNFGggyqT1Q1dJm1MCPyZW21Ehn",
  "key3": "2dp3JNMGMT9cRnCQzgzzJ1w6Vrzac216kv6JE7zgYnhJuMURo1z9QHBSBiuKWmHuDNF6q92ZnzZa7TyGY94hEmXi",
  "key4": "4r9CUTpwR65g8kAvu7AjfP6Ebpozf1d73M4dvGQ6jcPjDZ8A32w2Ea9ZYz5FXHwUgBCJvpFANiimc9VGcF3q9DZZ",
  "key5": "2XFcPHU9LffyXtn4Q68ej9ruLLEcTVZpG2SLrgv3DnCvW3HsBk7SKKg5WYp2J1YGFf44ouB9gBgEgQfbMdi7WYwM",
  "key6": "2WjBphSeRg46HCV9TTHvfa5zYaBCECvp6ktKUCzwy17j1buVmQ2oRmRMbwN3UxaSWZUu8vPdyv5zD5WEPTMbZLYb",
  "key7": "3EqLsCb9AA53Ppakn9BzrLon81FMvy58iqK2FibsXXfBeEeyjha2XeSoZXK82d9aJ2gqWWYR4w292Jg1xA3SGK6D",
  "key8": "2iErmqFtC9rEU8nAB5c9q9cGrFPPh1QVk9EwEm6PmRCpoyYAoE3Ue2fHi7JgNpSwKf5SdqxsAG3wzLdEQrZD3gse",
  "key9": "2HLZfpio6YdDheMXqrCiEDakv1nPxZAcnm1XuCADed3DA95svUAgJsqasX8DqhfxXCLzqztpdQPihwids8213bBc",
  "key10": "2ES12vfwgbwjFjWmMqbg43fMMHujfx5VhdmWKwMNXxs8ok7EJRzaqyWXwJYfjXQJXR7kgvDY7z6iAjXN5v8ry4vZ",
  "key11": "3sDGd14NJvC1raCLgYswmjfPU9HgVGJLejDVpgLa64C5skgbsvzeyjDe7Kzikyx7J6qasCxngfeDPheufu9ScGLN",
  "key12": "cx3fo3WXHNkZj1wsqkzrSFawvLRh3FhVvDkiAwXJNcbQusEd3mhPaQrnMidtQFpgwJukw7bJ5p5TNvLw1AoYco2",
  "key13": "2bLw2skkjuLzMUxidH1UxvHUZcYTt4jMXJ4hUxqwmRxbqbpkvvikaX59ZhS8gya7BsC9WWzpSUfnNN9TSxJBmike",
  "key14": "28nwg8aBR3ePqCe2n5otMrk1BUV1hexNkndHnKGxJ7UbGoPnSv9cWDMuKX6HBytfdMDo8UeaBqGB3UgWv4Tcw85d",
  "key15": "46tfZqsVZJHTuHoXKDLpEYRUxg1mjFKwhhFMC32tZmrvtrvW8EoHyg5GV4N6jLfMDu8AqbgU5QeVGXhCarsHowh",
  "key16": "3Us7JEn3erbxXEiMKzFiNGVJyQrx8WqrnKdxDyxjArVtZguXyJMAS9AfuitykzaQxkMhYCzSmMzS2vbMRakQgNf1",
  "key17": "3zCY3baTT6UMWCwqFj4GvfQmv22UsLidsdqKDZcCJCVH9D8g1XLRiZAQyauU8R3mWH3De2XvTb1oL168CbookZ8t",
  "key18": "vEnymez52oKim7QJjpXHhd4Lc6odcDiEFc4MAZeCPNzUdDtipu7YqtPtWNer6837JfVkK9uJVGm9AedRVHULLPa",
  "key19": "t1ZRMfqaKevyVEFQWgb1aZ5BGZQNNbeQM6JsqjEBNwyx2p2ReCF6P58LAvetUdXk3hSTcZPGsc52G8a29WP4FBi",
  "key20": "3Pro4BNkSuLBKVFUa3Zsw9nkromeg5EeVZEb9ZCpsRoDVNffuKCx4tvZANEFJrtDSxb78YS2aD2dXGSJkQ65yaZM",
  "key21": "EDmjGUFUX98HAHU6wsEr352QnmZu3Pi5YmWRcYHBH7AWwdYTX6sAPagGtdzUaKBbhLeRHKHty5veojeqGoM5zKt",
  "key22": "48QBmEuMuMxePBYXvm72DS37UH7j5A21nxaKczb5tYW5wgM7cxeJzCA9fmrffoxVcJZUTXSBmpZozudei31rvtWp",
  "key23": "34cqDYzSFYSf7GYCYUz8f7o3mwTRqBAxiEB8BYXuDjZB61k3Y23qYqdCjf3PqF7wTgKQRuYfAZPeq17nrq48RCiv",
  "key24": "5GbxwtujLKxYzAsNwDtWKoAuLfre2Bd62PSy9VZqeBqZ9FUMRxfDNCXjr4ibZP7LAz5noTKivvTVtU15rqcBzQwY",
  "key25": "3ao3rkdjN6Yi9iDcFsJRTrYVLnazHpcLC9mYd6CTsc6MxugPZwZRjELFooCQM3hpwvU2Vq6pAYCWZposyVrB8fzH"
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
