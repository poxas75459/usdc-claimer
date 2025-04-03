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
    "25RGsPknXD59CRjKH8FvqxpxAWLBuxLfZw1ZR3jCWFtSXvo8pb2iaJaWERzs9PZzh5YQR18dxi8b9cAF8wgXKXGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXPDPq18QGsFyndPA6ppQPsXS9XNmaL8jF54zFc4wR7WGVbhBJwL74Yo6GsHtsBYNLF6sPCYeswsDFKW3X27TLd",
  "key1": "3omn1mVBC9ePL4WZNJ9mWJbGpk186FrBarBTutBC5EXWJZrQs96SW4v4ht9HrztUq4WhSpN9jSCB7T1iWgFAe38e",
  "key2": "2xUkHznSfPP7oq3uCRbrLwFAZz8kjAx4rReWjfs4ML4dErbjoW4MUWcassoeDWYMngCHs4vcXpqmvuvMJmf2swSV",
  "key3": "ZxfBiMyUJ6ZCoa21CyjYjgu82SVjMyB2Lo23RAU1cxw8AyZzF2yP1P9ZCMb4bQkoR1EmUEVQ9MFiWgBFWQaH4FW",
  "key4": "2ipbqDoUWUuhM6d6g9ed8kFZKCeHAtLB9pdkm16gHXgR6ZJqQTX1cmtei4q8wm4PQ51WEX1RFVhExYFFevMCw43t",
  "key5": "4eLYWwXDNLfyZtRhrUhuHKRY1TQkKGRNRQrAy6eooen7T8KWYmpZpB8Etdar8JZQ5Yp5A1sdJPPT1PrcknfAY91u",
  "key6": "vSoKBrW28PLAzmEZ56BpB3j2x2CaMNeiehx3YJHv4ASgCLPc6kyEL3nXubBDVCm1NTdbpAj2t3azG9mWPiXQfsz",
  "key7": "3t2bEwvfKqTCWQvEeUBqxGJX7KAhRt5gNV4hSbjvSYM7MaXFByRPRrvHVaBpbc3fBo2C3zfrHo48CUh3hzf8ta5N",
  "key8": "4YPt8GRa1PjiYQxguepuDYMT7k8RD3uGfogNRZqmKVHXGmZseJW6UvBteN4hqqnfeUbgsQGU6nTR1RZ5ovWGwabF",
  "key9": "4SbkojnTvmm99qwjJx6Ta4pbSCfSmz5YjxCEZZ9fhV2hWu6MZGzmvVvhQQfR2BBbg2h5d7xf8UMp7SW33bPdDgqU",
  "key10": "4ofYnXFT7QXunH46qsqeNH99qLVg8JLSNzL9FKGF2TZRAFZah4h9sFWfPawaDza4UVyL5FiSBQcnsXVYUdZDCTn1",
  "key11": "3nRK67YL6JEomPDafXUAij9FA96MyDMiwg2Hao7wnpuXgcdoSyQdTzgGsWhH1kTUGAsdgTFwFDrUh97S89S3p12P",
  "key12": "3BAUMg6bfX5yJjEgWy8s7ob9uN3f56cHLdz6PaKsKbjkdcp9iJwnNPd6SFodDuW8tENRpv3djnGCE3Yw1ShzJi2U",
  "key13": "3bzUDJiu8KGsiMjcSrLkfFVNfxp2rP4J5NjWxybPjX7kueuX3vCMziuhmqLFQLpSquzSjyKqVaKPgVF4VR9d1K2b",
  "key14": "4u8T2D9xaQhP1Skbb7hNTgyR3yUGezcVkQccAckyqHyUtMt9mtTVK22rR8zwd1eraLe3Z8ooyP18ZKAsaeNpZa49",
  "key15": "VKkvv73FMrPe5QuHbsdzcULfQz2AKUCn7DKzT3LqAMToxEf2EGsREwCgkX5aQ5i6RrWZaUde1J6T1CpWCfs6PbG",
  "key16": "3RKKwwScFTo5SUCm81VxbeSAuBHj2DJEF5veVbuB4KTZtBDTiev3mPfgV5e6hHfH7TVifuD7oqRwqhKonfcQchFC",
  "key17": "3XTRvZTk1aukp9yG742Y8ECZjyPRaYWSKmTE3UQex5H4MGvmeprw2xUtLMLiC8wnCLREYHD11GBhkx8htJuDCL73",
  "key18": "37EeFcW3bFXMeBbq8AuZkg6sASuw15SkptUG5VhryiK8HKyuDbRDtcCqiQF3N4uFgCJ8Tfon9efq2hpe2efbPJF8",
  "key19": "41eHZcZxPFoFxQdSYi8LGzFfVKfqevWXdjKLCQhb56ZyyJdNhuj21kDAi14QeLxzmrLpX3mMaectHe87Brzrcfar",
  "key20": "3TfVAe9s2JanLrBrocMNHEAsEEfqgzVVjnM2nMHbHNxfHE38CeKBmURtHir44KFWyWjiQxKGtGKHbdcpR1ppygcf",
  "key21": "3MyV65RjGDSeT2NXq5Und841XE81YF583QjFFET5SxnAsDubtkeq7N4qNH2uiwQtAENkJ5eVnq8z7Zkv79tc4MsL",
  "key22": "5fb3oDhaGy5aRrUbYE1CMiw8uMyUUKZLjHe6VXKPYo51whKzNpCnK2QubjkpLKC4wdhgUhEhy6V2kbzsHR4J4Ezt",
  "key23": "55ZWtyS8eLV8SJEB46R1xTe11Rb3w7XQDStUQKDe5gwQFHVmTwsKNPk6FfP8XdrcGoLiurBeWXNh8NZLu3tPWWB2",
  "key24": "5T8YPwrfN7EB9bWVTJmjgMWMMJuVHiq8dqhRBNzvNL8NkTuoHe3fcpTo43ZCKpNtbamGbkUUimEcoRpnhSc9bXpc",
  "key25": "3F1ATLPhyUGJyRxZsw8DicFBKrsSjBA5yAJCNWxpjaqHUbtzhcK9F4HaeEsRq414b1HXfYQhV79dwEeyZoncGUxQ",
  "key26": "3TjHPxbeTNzNLzYgWZonV83EfTv8KRSRZKLchGxKasCZuHTrFwjr39wohkGayVVdLMZEVv4iQdXSX4yBDMvKkwgZ",
  "key27": "ZD4Q3QXMXEB6JintmFmdtHNdFmH2i634bYuDBqGeeBHYVDXQQKsDFv5aRDb8b7TYvD2JwhKpvT1wwGsV4DdNYp4",
  "key28": "2RKXK9YmjHM48kyhRmLdULSwnnShoUyfjhoTWkx1xV5y9WnZv2gDmjNCLG7du13q5p6Rda4Y1ii3K8STCkKMst2q",
  "key29": "4gchioZFJRRZuhKQb7kLLNMVQZXFEVeJp93ENCwE1BcanQYPQzyrRMubf93boKEskhgxVR8XRGCrVyLyuiaQdGEm"
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
