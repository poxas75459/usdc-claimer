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
    "55uBFxzkHjMPBR7BzcMusuoNLJh7Zd1FZSBTdPnvPFLURG5QuoNcW6NU6jvJpUce4GgDARDDGra1j7osWoekgiZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxkYGmD9LYLDFKTPT5ghqCmYNF33px2cqnwGhD4ni3zx9ZmL4XLBebCeSqAqdJfHYG7FLk3g8souZueG4Gxbuj8",
  "key1": "4j93vSdkRB5fQWdq7X2dDwN42aawaUBem9SwDRK4s9Noja9qKhuLDxeXDvn4PSrhEgKkeFeVvaLJa9Xf844gYRPb",
  "key2": "5gQgdZ5oCeUSwf7fgBhukDUCrW3ziLKJYawQa6C76Lr6f1YfoWMyWpHwiA8dpJUzgWzf1Bvgx874iJqkHgFgzpZX",
  "key3": "kJVN47meJGcXLn6RXwqvB19xV5nw7r8dNbtm45GHjfQrThtfXf8zynbwmBUtvos2wWUDtxU3qsXsHgfnYTA9HSM",
  "key4": "379qQbhp3wEhmP7TreMDPuCdMFeSQGY3yxGSWHyyusNwf9ninKLtCkmYsHsoqS6JMiGME6wNDanqqSPndeUeG4op",
  "key5": "bM2GnKTVKwDCCAT2U8DiFdPYYvjtk4BvSVMAyKEeAVTNRRq2DVquCE9BpFVEPB8YWVYGTjSWBw1CVH4JAgsufuU",
  "key6": "3RAT7BgzRZpDRZDcJfq1S1HBfQapLDubyQRSiUyDr2vqQbfSfM8rUXFWKk7N4rm1fZJ5vgMMJU1cb7eFtRKJiBHt",
  "key7": "o3JfMyaaLLnP15r6y96zwLH5DdMsmpseREqjbSqX51weYD3h8Rn46Gyu1ETowj1vcvJagvByDtUavT21z6GWc9i",
  "key8": "fKu8Ggu1mwsLRjhtjcnBvZfsiZfDmqxy37nC6YRGWUHzVxNNrR26QGmXCLVpAy5iSJ1bGtfHGQ7D44rsJDyygHE",
  "key9": "31sXfs1z9f94qm81YfbVzoRGgsuQmvw8tyso38W6f5HY9evXVKFeiNNXmgSENm77mf5HKfTy6cU4KuqyYndcyraF",
  "key10": "54P9BQRwG6yiGpZAbcERABYY96ciuaCJPjMcwvjyLZkkW2sNG7SFeQHi5hwEmj2ik4kdYc75pdpzyQrUchHgXdCZ",
  "key11": "j72TWw5wByVZjfQQvMkSEqJGJobMTWUP4VDneaL59KQjLc6x6YoooHrpnx9sFSYPXrT5sJ7nmZsxNg2aBohWbFq",
  "key12": "2tySjVPev72muBUAMzR9dSfSX8vzJoAEy1YC6KAAQ6rLeo66pK1gW4Wrbtekj5BwMMFhv3kjCKqF54i86Vf5h1n",
  "key13": "4H5H6Pi13SmHKb7zG26xBoe5Bo1yY1KpbdZrKCEVPMDxyWQAmxbaQiMr45oJBo7MQYEPxG3ZCxt8tNP1phNKqBnF",
  "key14": "2aF1xo4dG98x5YoBvK4LmcKQZKJBWgzQjiXZ3uBzRsmpCdGY3UdV9iffp9BGg3BwK1eVcsoDKvcHiHyttfmf3zLr",
  "key15": "2jrFMryCwUiYD9Wf4XJmNYy8N6gJCVMwYSuFqKekAXdr1hWAVGHxmHz3DeJMDFX6dfNo7tUhEFacAHR73Zxjx34A",
  "key16": "3NL4q8UMEw1o2zc36x6XjxJwEeu3swPF3QjzzweyHfUTxtmP3opf2SghxUb17ZSpCYQjcE6YMn9jSX5TdEscBT9p",
  "key17": "3uzD7W4KYJAHxWeYNNpggNgKhJseJt2SW7jfoAjqY2koJHcBG4ek5BCnBtSmbnUjFLurYnnPAcu93RPnoUuKo3c1",
  "key18": "297mqxQKnYDK3APBF6GqHVGE3jT1c8dgtoVuAwpHmFJdsA1SpJgp5CjxP3msohWihH9fSkW7YygJokyDZJsMayZP",
  "key19": "5vXSA2GK1jAQg2fmENoLFiU3mvZ5pT7xjRm3upEA8GN5SEQRNNk5E65kELB8okictdNEpvVdcvxyAxjZnW5973Pt",
  "key20": "5qrk7hTdXiVjV4x3HAjHpFKt6WAUEFmyPt4PTsAE5bNFMxn4tak3TweHLDnTm9HudwNJkjZa1uWUqZbB9h19K3cQ",
  "key21": "31wSuquorc2nZzMjKNzRreMEoK6ZhdsMWe3LTWr32vkGRMw49J2uZoNxwJ52Ad1BT9Vb6VU6Muqb4J5UwZCnPxLL",
  "key22": "ASKA6mFHyj8zinGUYteSDojNtm8F61umVhR3141x5qcetB4kJJpRDVaGcPJByHXK4PMe81PCnfFGmwzKpFqf5uG",
  "key23": "39JW2t4xddKVhFqtdoWUqUM9iFLLQjwkeYZAUv3qzUnCeKQEStr211UQaYS9J4xjLKhcd2arh1xzwmNivsoGoNWv",
  "key24": "DvwWm5Gdc7Ssu4ZCeWAx6b6da6owrkWRfufGtUgMdb6o6h5YEuUMZMjDvTmmvw8KUJ6C6xTXkSvgqHrL7ZXzqgk",
  "key25": "4KXf9x1f42JFW9p4JcVpc6DAr8BQ2zjWxqrkmCPRz1eN84QCgUsY8n5WkdTs4VfCk2JzuCfyGFbPuuFqg2E7WDB",
  "key26": "36FG4NdnpPw1G4UkBDoESopZXBSm25Fq3Jb5mM2DNy8HrJuagrUn5bY7SApnWBdR9thBVTes7rcSCi3ZsgmLC2F6"
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
