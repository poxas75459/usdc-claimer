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
    "431mj6HSZ8DWg7hzN5MhQB7YbnqaamN4dfGsPR9M5fGmrRWVcv7q6oVie47ARDZohYWayJDqUUBrSGpcsamogxma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XqqbYMcPGStYuZaXiLRUcBZr2SnQLDz9mjkVBiJmRhVPTXqBMWDjpLJFn8tJbVo85MqFmViusPuqesaAR8TGknp",
  "key1": "czuW37RLDz4XbUEkDVNZg9e94t1ZbmiY47cogCqqhYYVksoVNgSzdumF4w4mR2DTiBmaSst5Q2ZS3rfH4x7e2k6",
  "key2": "3ERZb3iLUdPY1H9iNp6bL3RqE6uw9nVz3GdYZFD9z8p45LkHsrTh9cKiEJwJ47WVu3Fvx3nL7yJ4a3bC8UnSygEt",
  "key3": "627KHKXRks91PvMd1Tfdw3yunKb5XVPesKdVFKr2FWA3fUiZxxcjsVZTiMA7trBudos15E13XejUWhYL3cNqYXdd",
  "key4": "2AggCeMPdquvQozwFXDeNrYPZ2LG8q9UKvTKjAve1QMRLnCjSfpsk3zMHRcrYdxmDTjX8V9WB9mW8Br5vUirPrcn",
  "key5": "5tKhwK6iMrJddah2e3d3z7e3EmN7t8SpViGuxehQ9tzUg7BqMZ16MdRBidGmnU5P84Vrg7bXDzwd6GxjtDM2Qi72",
  "key6": "3nmKMBtAoFmivkjgPC7VdP3wBFt2HtXnJBNaUrShcRWWpGSR7HQFgZF5U1iT42pjLUin2bxYukG8zhitNxDVHHUd",
  "key7": "5StnN37Poxo7UzUnTc14Rfw1Az6eTfWXeDhQzbVujs7L5Y9ZccKpHWX7We9zDNKMGj2XoXLp64gJJjZJSWfq7izL",
  "key8": "2S5MSkrsNHKNopW8bwD35TLuutQpxwXtauDggN4LrCdVQ3J3CkccFDSWKni1gimxH8SarukwcXKwGqyFgp64GS47",
  "key9": "5rSkFK1pSqupdGcDGcwGGBTau8diHrqAqtiucJjtTAd1vaXYTAs74tb7BtixtTZtYtRGpur33eBbzthfZexAmpof",
  "key10": "4jVqCWKTU8XzrzWhnDqYqNmsLLHkeRZ8MYPKsuuC4uVkyKFXoK4TXQ2ohedrWoNcA6pE56crBZsj47ZC2VcmJmEF",
  "key11": "pPnmQ1ErPue9Eszi3uDBEiMca8NAXj3wQVohzrYvDaJ3ntLUuxmyVV7kN2gT1zew7Cuiag1B7Gky5FhRRn3eJDT",
  "key12": "2LN1zYHtappUurqpyokyBW86pBTXkC649KW6oUsDKcCk53tgQWeH9WkRj6A646H6BTKwcrtHumNxpn2gHcDg2azm",
  "key13": "28Xqb1fRQuv9Bp3WF4oPCS3pgbK5xK5iCro1EePTu4UBDzEQi2acC81F78rer2C7KidxE46KLLynMrcw6RBvcmke",
  "key14": "3C3q2bsVpDZichnJaayLkHactTxXmqmVpE118wB69P5F2kbHoMSPqMkNxWUKaRNPjZAZDV2sj6vMs1monMy28M3U",
  "key15": "tTH1TWPUEHFN3ZAjrTW15Bt5f6R38Zd4wn8PKmQahyzp4HupUFWP9AoRRiSCMS3oDXNVBVoU2nNqQ56tSWqNqTN",
  "key16": "496QGo9DJpvwMp4gRwpabMUR2Ex6hCB9tBc4dhqWctgLvYWsreqn3yZVaCJd8YjMnGn3CVxcRKUY4qCeXzXBz5ee",
  "key17": "EZDPicoWTRnwcLUXoe3TZ1HW3s3uYzVqV62BCcDzzrgSQfgynrhyHTZhbpNNT6rGhvLjXKUk5HhoHTwPHMoniqe",
  "key18": "3nsif5Sin6bk6t9jVZ7kaC1P3uZErmev7o5bWY9hFdqUnuPyzbA6RWthEtiTz9djcjksmHtQAHTeuMVgdszgyHB7",
  "key19": "2YBpKBXhcaVrYveXTtgd7Uf7JyaM4By6uiGdhDhwKnW2rjozG8A31VrFBqPTkDnZcixgaUGb19Nrc6VSjACisfuh",
  "key20": "5CQUADGihXhvNRpPh8zbTEwUex7wVkpvyxXCGrDHaDDVpCAqfVmzTrLJXrBhBeYBsfvUTPvdpFd6QDeGhwCmzy6r",
  "key21": "3zwdpZiTcUvcfRG8KrsBTUQVjAJDtZdBqTzrGAWUemzxN2jzewmFvMzRzSb4vD1UFuxciPpPPZf9MLqvGsmPgKZb",
  "key22": "rK8GSbcoomxeUD9K3LWiesDdPfdBqCRfZ75XUQRwc6D3KLXuCgn4dWsBxGHqc3cAqr1QPTerPCBuV64C32wzg8K",
  "key23": "HpdkicKWWZA8ZpgRNXUBaR4g2UUwZp4tm1wJHnoMirA9q3ouqyXMwuG8LeXLPmJccAPxPpGkHVJN43wEibprj5X",
  "key24": "2dZA8YFgRdw1aXozjUAT2Kp3Ce9G2T97NfeGREA1qja3bPbD9W1gyb4Fb3YLGEmZbDtjehbAeWg6Ae4q9NTczsE4",
  "key25": "4W2ggYzQz3gieNt9MV85zsXSA1T1zY2h5qBJ396qnt13MKZjf8pg2Qp1xKP86yLhkWJVExaSyJwUxhMTAYsGNAzH",
  "key26": "7TkEUgZftWxePuWt9vHvujt6CKW2sQDprVUNdHYhocMSHv3SMfEhFwpK7w6bv6fqDKSdyZRA9eio9ur5pxmSy6q"
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
