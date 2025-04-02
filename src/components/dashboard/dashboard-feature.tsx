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
    "3jbUTRS1izGFhMBDRrLyjnKjeKzY1Yk3sNfTDCAL5AS4Y9DoF1Z1zrB7FKaY1HX14BL6XXKSQvtH4NBiCyhz7Zzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mueXhiUcoGvbnW4NEwuCPoKq9nDCcMtwLsoKYtvkL21KrYg9jccKrDn37JwomuZv52gT6DGvNFGDBHKEAoXds7",
  "key1": "54ZVzv16EK8KVoPiRq3QzTKMpGX82fsusaHL1aHAhVDn9tQAURd4rDLgxrZFkaoe5jzz5nAFrzrXvcrt5tmkgC77",
  "key2": "31K2MugSeSECCjNrtgTUGnTX6ieqZKbmgW8i9a12n3kGJE6G37if7WsHGcLaGguJnPLxW1yS3q4JeqSAooQH9sS",
  "key3": "2MSsDLGfF6mDpV441JLryr5CyTCmHNKce6sPkxdAw9kezoLeoGp5pbjCVfiVs3uigNjifiB4zx6Fce5Ut7e3TKnj",
  "key4": "5AheW2g6Zf87Z6E7bbisqVFjeLjJTAcV6oiya8HwdTJtiT7tMp3dCMEEnU41vkv1CASL3BR2yvc4CCbGVBUTEpto",
  "key5": "4Hwka6suXAewVb3EquxUrN8VqPuVzqWBKuxgxHos8HNLLkm7g6vKz78xSqNH83uHYs9EznTXHePhVJhVz8tm46R8",
  "key6": "Pv5bKDyhoNm1HVKQBDup4PGsgJhce9T2S6Agm99qgzPPYEvi5g4F91uLAqrv4NFREsZiDDDs5K3FiPku9iF3Kfn",
  "key7": "2PwnTjK6BaVECfEPbg8sTCdcdBqb46v6M9eHUwLYSgJz6io73Xi9Z5kjWK2ZrcT4ZQVMo7BUk9jsWDcGgGSR2M6S",
  "key8": "yBRuAM3C5dRiWbePVV5aR8X5uEoB4fxSVQckCQKMx6YEY9ZU2Y86Z3S48zzfmRTgwn5krk4JZ92uahC9My9Wva9",
  "key9": "sfapYwVQRTdGM6gnrNL6wu1iTYCJhzGB4tasvsaRqcpoJ2TicP2nAgQdfU352ZjLdE9gsZgkLFomjbTBUDbF7cX",
  "key10": "3BZNFV9Zje4n9NiZp9pBKDSSZQNXcHnTEUyyF8n168euEHXukQve7PiTnUH6noF2BLqyfV8DDvsDR2YoUnXebtTr",
  "key11": "3dXyrZXeQ34xmMLRFsNxA7skkDJsQMxRL9FTuwyAc4okGdp6ywiSj72uKW7mogHoQazi8tRBZXstYoT6oxkGhJmq",
  "key12": "45YGQoobN2hPXvFvjn8k43metH8JzeyResXtK2qZsfx7aVhWoXJpehBoagSkG7FWVsRuqsCXCMjz3G4ffhWAqaUD",
  "key13": "2jLHL4ZjHueYjs3kqYyPqAZhxktkYArxoyqiwm4kaZVfQKrx3HcwEanC4QBxwWsCc4onzmZbPqDGw2LBjYueCfDZ",
  "key14": "5iXcYaTGUJYmVHXHnHXrf58VrZ1CuUW5pCU1DTvqkCaZYxXAy9vJnJ8vMUTUcnpWdei9T3tnYHAe59WefcxUGzGV",
  "key15": "5K9jXnRDXonuTVWLGu5fdLaDLJeg3TQfdnACgttvCR4hRWh7NNVFsRWRkSe5dV2RhULbinLjPcEiqzVmZQgBo6Rk",
  "key16": "246ZnekFrQnCXp3fDXxmx2VTVAjCFbqbmY5hUy3wDoz8zP16CPHLNKJSSaTgYgJYoQEUyDan8VC6URXf1sSBe2Jc",
  "key17": "5ijC6Uk79LddnR6mexVGh4gECLRyugcvCZw3fwFu8v5Bz8GHDtM7wDp9USYCQ5jpAhNYE2vD6VqFJhrJ5pbjeQuK",
  "key18": "2q7CdwdsHptPVjmdmqcbPaC56w7axvXG4KjdWPe9ds21zxJ6Es5jHx8aevH4XezkAQromTPLGavm1cVE5qoTyPzL",
  "key19": "4gz1Un8vxqeZ2sYz8ZB7y7MxJeCYsfBvJKLE3EzJTwE9TWNPwUY4GZv6GPv8GiYUCs1sFYtWMKduMNsPLrShPDeG",
  "key20": "3Xy87tBKNT4pv8vQMeP1dCBreNxGMoYUVBo5eGKc3eN1aajvFNmvVZJ5Sjib6Dd3zZUbJDQ3cLheK4SWdRuLtk9m",
  "key21": "4rUvn1JLqrDsBDeBbgMynjJCifJ7bCX8EevYj9h16BnjkS1TecBHzPhb33z8Y3nuHAdSXENF3TkfCKER7k9S7Ty8",
  "key22": "SC7zPbM9DY5dMy7DUEVCFZE6CDaojZn983U5fSXe4umvCwvNdfAtQ2eh76KqjwMjetCk9VYVuJgnVtCT11b9koX",
  "key23": "23znBWEG4MxQc1eiJ3D3UkWxxL68wL2zhYYmUG1xJLSKkfrbNta9J6D5ZJ5KotF8YWD8WBbpnhnFDymJ3MnnBtny",
  "key24": "J1gpQ9bXDEkh7uf9KzDEG9bJdcunYGPotqWcNPcM8ZWJuG4Rf7e1cC2iJwGnTy7hVWGwNSNNxiVxwxZy45KjtjP"
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
