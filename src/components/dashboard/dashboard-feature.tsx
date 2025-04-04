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
    "4ajQvh4kRbbz2EoREhaJLZyyhUhktZFmUj7nye3m3LYKp8ZmQjGHhom2ZXTdw4Z4Xzy3uuuUsDqxyZ1WbzNLxUto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBgsG5Jw42MvEYPoeJWL9r2DtenKcpEQfGvvb1uUSb3ZUNjMcL1Pmp2wts4eCYN9XP1FQFt6xq8VRm35R9euUjp",
  "key1": "5YcTHGuxty7onCXPUze81m5ks8MVRnfDnBe6xEokhKH7L7RFh49JQ54Y96vs6xPSYxyTsQ5MbAHMKswBMnLnuRrL",
  "key2": "2774xXXgKaqMT2MYpbiTm2yLZPhS3JP2y9LBbs752V8wC77sA3CU9wHTXys7GdGvgjxpqyFwHoFm6pkFDaCejQgK",
  "key3": "MZGUTvAe9w4j1ZwHnvb3cK6UY4i7fmJPGQQiYBZTHCGMLGontibVv1fsjhbwD8aK1m8UgdHzP7KVK6gvV9pvPgg",
  "key4": "2nNHrHSVLL1VPkmLSV9rvCSvn4xaB2QxuJ14y8ph7XAGHFYD9AwCh4SjKSkwyKyK1CNtabiqbWH4dYbbcJdJPpvG",
  "key5": "3sqzZoKUwfdT5q6MxPzDMU8GLjSXNonXCe1gK7ZDd1aPU87wefdxFUKZP4KSR5f2zxBJbDtLrcaqXEzMrq4hrKAy",
  "key6": "3x6Svu3eQb4zLJP14UdZajvkfosysMKeujkd1YUKicdDJmFt3TtscKVq3KTtHSi3FAznjtckU45YcaNj5zYsEYYK",
  "key7": "322wjpWNnZ2b6YR1gJ4uzHkiUQccK8QaoarNVSRLJjJ2XTxonY1BqWtdSytAT74tx2n8z8a1xizTkNM6CkSf42mX",
  "key8": "2BfvGSMjzeexnzK5TX7JvzKYEetQi2EgrsR5aBXUEUvvFWE3fTiAv7CnUTFqCk5EqsuDML4QMHJvw3XRK3wqdSAw",
  "key9": "3oSHGgPuHvGKxebuWaGm5depTkpg7FAH9tCriGi47Lfd6hYR8Jr1ZWZiRoJi6EsU4FMqsAUWdD2CapeZJxKV3qMX",
  "key10": "2Lu5U3cThReAUDenb86mFzpeDjpRrQVNLcMPKEcn9qgUQqahwZ2qax5Jb4r8UZAToWyYg8Y9ptUafYTvt5rF2bWd",
  "key11": "4d2Dsde9LLXGn3Dw7gvPhSKw8winRqCcVdGRYD8n2PRcDVtFxYQ2nsSXZdWGNeKniQANHrW4JJTzSvp1TkBwYqY7",
  "key12": "nAUo6sLoyt5jDSsgq3kGgswfhajg6mJ71hingdxNCDyeAoWa7h7j22pETr5m9L9J5ppUE7yKH9aiFGcPx1oqU5o",
  "key13": "3XqMHq7SVz5rtThTCXqw1W5CWB72aMvLRL6WzFRxENTaBAMi8NCRwb9PNYUxtW6aUccJufVHsQ5Sc7bMMEubcbaS",
  "key14": "325bAhW7YcuiaWk9uCiP6bXkT9NWUMR4LwESd6G8m3367A6JJkVKjh26QCjpXmvSYmg6ExSKzBDeFk9tt7Wez3ri",
  "key15": "k3t11Ck3XerQmBDx49xKtG5a2EpZ4bFooov9hFNahW7GD8s94z76j9LeMak1m6VzDSN2NyWPdWdNdc4heJZ5CZ4",
  "key16": "3m2inZPRKAekk2W7A5f3usxNki3ngJdoLA3aKEGtam7pajQ7GirmQ4dZQQrs6h994ErJDpYi5ZCzL3zwZqraC56T",
  "key17": "4qNeepzkCWhwU8bV397mzwPNTb2kYafpfFBsfZ5DT1YANx4xGggNh2KAE1qonDspJtNgVsB5UP8mhrzV9keAp6Mi",
  "key18": "5Bi5V3yZjQbQZGeyknZAfwiVhSHLTPudpjPDxtRdt6gHZ9wH5WJgv3jaAct2AceaFifdKMe2muKiqMahshYjzcSf",
  "key19": "4xGDM2WYFvgMDnuybPs8ot7B5EJgwGeCP2Tr56wJiUkQdtyGySjam8CThEcCaEbrDtrnrN2vTVmLGWVcA4YBzJp9",
  "key20": "2xLKj3HbBNhNMtyq5RCv4SKGVWStFjcsvM39pj6s4nHr7T6JXARAgP9RcNVGBWxwaJuqZrJc8r23XPMwSrWGFkPM",
  "key21": "5o4ExXPj7LSp3ZXaseTJUeqkamRWFDjK2qYkGmjw5K5Mhgxy7oiaz5K85PEtDDnuKy6mrVYBp7XvF3Ks5vmbbziA",
  "key22": "4viAmtjahKNan4AWnkQPTbjX5tQhUSUoeMWqkDAixLp1oegixmh6hUSz4ySqngRUPUTYSnPExPBfn4964BtD3jzs",
  "key23": "2ttUSEs1229EssE6F6YsawXhLcmnAz3DxNDt7C92hRCWAxqHpD9cCecGu4UNuJs4jCZLizwFhhxxKisHyCr4sUhn",
  "key24": "38ZikpDTAKqtG7B9ZVrtNW5oUCcrMFyzUBAr332QuHGBBpkSAKrWx8UXRjfh6Stco6scH45ojp2pSHrkc1YBrn4x",
  "key25": "4297dmNKt4gjiNBBhFY4jqF62iwLMvGnZ11dmSd2jDLE8tkh97AaKbqRVfXRU5Pth5JkVSw2rCWBxhWCSe2sVfYH",
  "key26": "4HZAKwm3hNtPBDHEQErjzVj8mpKiV3EQ1YCHAnVNgoc5LuKYRMM7zdAC5PhbUCbHi9rpkgWbutRHTSm7qwpYafkW",
  "key27": "47LN7EkK2BRLGQPY9FnU4tEcA29qjJtGddWaab3fVHA53K4oGAx6PRZtur2QNQtwcFNEGN73xjMGi5haavRBSkWk",
  "key28": "5YZRZYtag6YCRvWVmURyJTpF4eZp18uunk8FWynKhmAw1zLrZH4GEGA6WSjiG8TkjnxTzhGbTc9WUbx8w52mCCLs",
  "key29": "2fwVcYcfFvbTx3TQzAgaSCiRePZyY65tQG9vRS3nCorEnUsfdHrG2vkRotizJjzwKXvM5DHuQta986ZBKrNpvkit",
  "key30": "5BPZunymCqXqtRawizVFBmrgBhgWwXANrbsJJRijG2VQ2EYWeopEDzcmUm6dvfGSyFHpgV9LqNiFJFD8Hz1adnpv",
  "key31": "56gf5CVPYMRKuVsJYWmESn4yD97G2dMupMAgKPEsk8UPq42aTCaofC6Q324r1NPpwRU97JtUYRL6UgUTknwPnPe9"
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
