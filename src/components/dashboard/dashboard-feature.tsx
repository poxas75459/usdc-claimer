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
    "uskH12RkYCXrHAK3moEvQDC6zRpWYCzCxv74CaJUWq3Hym1AvhyvkBTW7E5BRUgfKhdHgLpXn3YKGLLLCpYJeoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R8ECi53kx77c5Lw9TzAoNZdPHqi56JQ8unpHoxWqaZ7HmU25cZ6s9rbZ1NShNc4xpWZVqnYi7e7iUNU5sMViRtE",
  "key1": "4h7zFcfXc4NdpXz43SCt7rLBFCx6jhhaM3ZHG1ENwpC5QaXCJswW4BGmzudXf2xEZiukGqmjUBf8xcE7Vtuj3rUa",
  "key2": "3HZb5fAkhiCSZRxMejXFysLiKGqJ7E6ZuEGQjwHBBWszbZWRQC3jabc6GWpajcHYz7VTsLhHHW2Q5rEQMSXUkFSd",
  "key3": "4mkBJqW7f49x9G4EBnw4DyBFTFTS21UpfDF4Tbru3uRQkEuDNVmFbvceGeeDjrkqpmrbVo3YBVghJFLosGaWmK87",
  "key4": "AZudnCXKepeCqtND231AA1tNRsnymvf42au2toxppzH3iJAWBmWKBMzmkewNrY7Zy9vgpMfPhvKyCt89em8viei",
  "key5": "3B7MrnDw172YGyYgD3Xv4jZHMVFLzW6wzJdGAUWMY7WuqTwyVyzQHV69QSnxtcNU7Se5ak9HXM1y3zjNbGCvYtfP",
  "key6": "3HkLoBPRxVHbro9ioRjSNQHTWP9wzPekGVgbh5k5XrXkFnPskaPLLt5Hoh17xwXzByr2XREfPqSidkVXmEXMBrhu",
  "key7": "5TbjQGwqj7kAM5aK636Bjcubu3ndHXNsyL9ZN1USyGYmBTWk2UbiBxJSnd5VqPUFuXoSs5ebUuu7waiVTYeLSSge",
  "key8": "3iZ3bYHxqFLhcstpyf61CdCc6ExXMhLgLtrfTPvEPARKKSi6qhosGiH8BKfYSA18SPXdNyUJAzrCByeVv5uoGSCd",
  "key9": "2t1cCaGGFeChMjroe2p7nAkx7KVBjn6xmM56vQhAhxvv7DGHiY81Kxh28kZ3bgt8y4fheyjUEGfULJKEkc2DRfvt",
  "key10": "39ffi742CHKczwhP83uAbc9TXb7pbdQFi553XNDsF9wbWpn8Ua2XK3yb2agUqaxzDJfhBcpF4ZGwL2gQwkZiG5D2",
  "key11": "2UfYxy6qheKQ4RrKLvaNRUzxMyp39YqGf1Z39wT5METZLcQgCbnumvbfa6aSQ97LLvgaaHgrRzC3TY1K7tMVCjoJ",
  "key12": "5v3PaNBuKXbME148L6tYBwP2mHaiP3eFJuBVMre7AWrqGgyroSc4fxG8qZpzWZM1QcDTPobiCKr4AfGcxQyA44fM",
  "key13": "2h7p2htUJZWrSZTRYuv97t6jXJyVSkZqjdAvog2Dv6Tn5TyYVuugNrg4xnzmvA3f6bWTMdSKLHkfsRuVvc25VvC1",
  "key14": "5SJCUZmtPT4ehZS6fBGZKy8nYY2gzVGw9pYrbHq3gAhjgHWagCry2XYu8XFKEnaqp2fUqdp3dq4SaiaEBNm8gb6z",
  "key15": "zCF1dtuJLGpkkoTGDGW3fkCraxT64XYj2Z4ohy7q5H2poo75vJSagbrN1KySAu9bkL43EZZkvY9rFxC4ZPDqHLr",
  "key16": "4g3esqwgJews8QL9wZ4G8dcNWqJzxcc16X1dF1fDTJpvbX8K9AszbfzLvUVrznpLpNzHKM4G2iQJn3wP5VWx3SFc",
  "key17": "27YZaFyXaZHTB7QuiCDJwxsMiVei2Lp3qrcoMQqQ3E9FmD8pAJEUM6Mwwo2rd98KVApJtp7tzz8tzEb134dyA5AJ",
  "key18": "KQnDVxf3xnBvZHqB1qJsyKwNJgPjLVMCzmwEj2WCrpPWG3CC21uoaVKy4D4dRFDZZyNBYfbMtBhhjkUudefwW6X",
  "key19": "4ULA2oZXxXsrGbC7qKw5jdN2T5BnnRxTzE5sHLHnELmmc767gSERnvwScYYsXyXJodEJ6kHTB2ab43ve1hTkFmay",
  "key20": "4sbzKbDsHpttqx1tJR4YEuucssJkZpjdXJRnLgfqSc5gXEFeyuhMGTtxCa5yedXp1X2J6DUkBtzGzv4CPR9i4r1e",
  "key21": "aF22tnpB3UMVwMuCmUd2YJyQ7no8S3KKy8U3ohRqsq3KKcjsbd7jUUnXPq6VjEdhrDYUqTKLQneufErLjHvRPtZ",
  "key22": "3Nu4Ph3DHBFzQx5RuYHKqDHXb9pJnmhp4pT8pM1sEiYPF6TRRGb6aTHojPFq9wNdZEZaVvqMc1rRomPAyMhaY2wG",
  "key23": "3RmYYcJ9kkLtmZVPuVSCx2YPBzdM1Bj1fWiWVEEnvEyrnXEugRCUFHaVKhPHpFekezM8qPuDJ74eqPKq3D2wYUjG",
  "key24": "5vMiGzrcpf6jy1QnDpTaxfYWnSYY5pPKzWpjyi9czHHZBqGmvv34hQ5GCttHwdRtthr8mYD1iCyMj1jRcHW5pfSM",
  "key25": "5YPchjahxY9KoAWyFVcqdBuCXMpphY1b3UNQNERR1eBz41U5Rd1ffhLcu63Nx3P2V2UimjL8bognRiB9WtFLbcHb"
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
