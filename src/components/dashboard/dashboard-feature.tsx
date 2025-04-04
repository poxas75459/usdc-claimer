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
    "2bVotYDeR6WbMbCE2scbqjuuAShQLCS2qzKKG65XLwJNtA1eWFCD5fPkWhk5aDrzmUFsxUH5ygBaGLar7Z9FN8ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXmoHGzYRQpcqnWPVBwqwFm6xKsSYNu5SGLpykXbr9o72z3BaTdmLSEUPdzSSGwcm1aBgqYbo9VEZZrzvpLphiu",
  "key1": "3vroATyVA8D6QfS25nApa6CnJCLYQKzEZuSC5VmDEkFwST6xiCcfcf4nGBhkt66zUas1v1VwyigRumKfCaK5gfpv",
  "key2": "2UqE2ffJc9H3RKZUDQt2Z51f9VTALUHCQNHcAPzt8Y5ASPFisW8vShqhRs4wmU5EcAynciyAkScoxe6m1Z3fyAAQ",
  "key3": "3Rj7Jg2ggaYaM3Ri7sJ6q2oPoBH1vjoGPPQV8Ggeqox5a3WLQSxzP1FU9wG3D3oM5Ph1xfXoLBZxPaFGGbVjFFYB",
  "key4": "43gTbeYNqSEhbzbBX711y5Rw3TV3PVxum3wCTbEzvvs9ytf2MQMhhoPn8edaajJ9PB4JaRC7WXE1hCYYqdATmPPv",
  "key5": "3Rsfx6yReUiP9qrvroa7ASx9ydxJwAL459R2MxDySQoGWSEtXRfDdYvoY2qdUvUEp5oD5aNrvbZCo7tbS95LqoPu",
  "key6": "4ByH7NL2n6ApcqD3WRYdoPXq6daqyu5GrjteZpXB2tQFHMRDcMFqCZFbNhHWFJmhqP6L4B9vTZfXYBGAhXUS9iWc",
  "key7": "5Yaxvjumz9sGRYXXJRjqDivu3BrBnqBLeJTmQhcAz4bsd3uspQci6MVTddx7HPM3egeLdXq9BPGNZ3niTEb9PTy3",
  "key8": "yd5GRSsrZwhGhaf2tBsfKwkDCApGxgCwAYgTrMAZERSQ7RnNxvCYxrv9QFtqrF7pC9vNsompUxbfm8qoju5iR7Y",
  "key9": "5veP5KxW2NPgcL12Wcamwcg3f2AAgMUjDcHpLYa7LBj7uVzD6tGF2sKmViU5njwKUUtbTd57onpzH9rocP2swW66",
  "key10": "vJT6XFMwJcReq4X5jf2PJsoiB4SdCpcdcwWqLvSuQ2c5ydGi6fPK7ZPwjEJiMkTYdjcGU8kKkmMueNTLJ1A2fm2",
  "key11": "4rhQFhSzD5rmsX3PiCxEHakqqrftvGmf6mSr5xSHUAbLbwMHtJC9AWbvebQagyetYANw9oj4GMkDQW7m1xC2eBgy",
  "key12": "5DRbYqTnfmXBrnnGDUFZwfDFpcpuNc5D31LSxqMsXomNYvS4bBaNoQKFzurbkKrvsaRYPYVJSvdcyXTmiYQK2DSb",
  "key13": "4ocAsHCf2o4TZ4mBskRWMbKuGt67Bn8kkQMc1oQuatU45Jn8aVQqsLqkkhCHTGdce4ieZ3PkhBXJGTAEpZHjFqZj",
  "key14": "2iQ1SJ16eE18WEMtDb77QekkUVonCpeCV9vMPVcyWGBNqoNsLeuqRsTqH7kcWBgeQ3xvs36Kn3AGZTDVF2Jr8Z5w",
  "key15": "4EpvyWeKbHvv26ai3eTw2Q7AF5HM3RRSMpoTJ95uSyi69EbbNEZWvvxrwWFEwsRKAD61uaRdRGVrTMuZp2jQqMvH",
  "key16": "2B8CKYmCWALURUEhqJkxj4cmGUKrQt12zuBuAAm3S5tgprfQCmzS757Ryyhvwfp13oG8owEqNirGrUfuSfwHhLFu",
  "key17": "2P1BL7YQAkUx1sMCMMCGRPW1GHk8MrAow2si5dnZNFKtxXiZKazDvawYsxSDRVErAV33SiskWKTmEKRzzXQJJxBh",
  "key18": "Ap9TJVtuSajgv7KihaLzbsG99d4ig2cMWgw76HJ6ra62yRf4eASEiimf8WCrfURbCDeUFVNUHBSyWPGVLdn1T7W",
  "key19": "4qNBbDUCg8Vniyv9yFM77waJrQHgNvGJGceHHHeLXjGrKCnTvDJ9sDYRbxpeB8NKACW8wksvtK5VsJdrqtA6XYPF",
  "key20": "2KmMjwDMLAC7d4CymBjG5cYr4Ntbq7FJB3BHsxMmxVgCiK9zzYk4QMauxcj8KsQBe5X1NxaLoW9U5EULMkgAdbWW",
  "key21": "2n4TX26HD8M3AEF2Lu1eKDtzqGYLYr4hBaXPzfoZL3MKjfZeJ2NPPRjqwwBxR9gsoKUCefs1PUAtnptGsGgUMtov",
  "key22": "3U2jdZG3i3P1wqFF6yVhi3Y1n2bbv2zu9gU9JQYmCSDxRwjQV3y5McnY3JSNr1SNkww2vtwau7Pvx6DmgZt51BW9",
  "key23": "5yxZiCwpYKmbqZxUPk3x9zpDHHfA4TNfWHRmsmnUPUh2HzhauV3VEE18w1WThUVSd6etmSyL6UYbo3SegELj2ZeV",
  "key24": "LQ1RgXUCTATGdQUT8NxqAPSfus56rXfNMPnbs2tqLWB8WTWUgZsoYoYJgttp3i7PJN5PWHMePB1gWk1WhCUa682",
  "key25": "5FnFvgDCVTrWhrxg449hLSPvMB7Hw66LABD5F5fSg8p691voyHGQA2VJY569AophQ5xfYFx4VTCgLzQuiXp5iipe"
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
