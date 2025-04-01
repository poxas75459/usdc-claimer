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
    "67hTZ7AEMLX4UJwXinCvhTx62AMCi8ZqoEvEgg3W1iSxMBsGQ1UhThH1sM6mFmhiy1zfqeMVajXyS8HrA5e31YmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JZ12ZxKDJFm37KmDAQaUibjNfydQ3BKZYXDvhbWgirygKRto7kFBxKYtxYSSREiXDSUawvm7VYKgHz4v9YgLgL4",
  "key1": "oEqk4heguc25ShxUXKUvoJJkyqMd1AT7dAU1Cfy5bppJZvkhNf8kLdL7dvmTSESoJLgVAPDLwr1TUAMJqLogerQ",
  "key2": "5bELGWCfpr3fCgDV86AJGHWrjZKYEmcf3E2nndK4yiQKcrzKWaMXfQ81P72QFJ2KNGMoWipsMRCfZ8Y6vDADB3Lv",
  "key3": "4n823NUHWFcssSD8Caf88sBcbWtkkg1zxp4f2eS1P2onQ5uBRPcpbhHqUpwkZpNpWHUYtSA5LBErhPxc5FJyaj3K",
  "key4": "BnY7wGUy5kWHFjLAirfFiRqaMSkLYF5MDQTkYjQ5ufdvzXwkmCicZ4BW2euiSo9Schq8vqrPvL9rC14L6jaeDL1",
  "key5": "2hFq61nP5hSJumaYyi2Yh5YVW6Gr8ZFSzmaUntYfYL4vxv5Si8N2NHbgqNwDrsPYg2u2nkovx2fxB9Dt49STmBxT",
  "key6": "kb1YxwdtpaXekWLqCxW3YD4hJPdyrKTGZ2bf9kFqgS4dhhxHHF8P5EcurAo3iFTLFQuQUCQMvo4dgfBmpRAgEox",
  "key7": "3ZT8uhrqhwm4Pu3MZve1KMg4H6FwgZdmMy965H2bRnLfDKF8UU6psxqMdbkySxxFqKfAKr87YmXs6oviKCZUtNk8",
  "key8": "rRrHr46MKDbHcBSBQaMcGPGaSCdThRSdmmYrrw3XrFRBwpmoTuUwgvmgKc7FY7tVHhRejCPPcJ668GmnkUKJ4Q3",
  "key9": "52ThjHeozcaVjgzJKZ4LM5P5bkeTr3MAc6YNkEuunUa3XH6YJNJMdvgGfc8mj9YmBF4HRS3ETysyt3URf31dnWEL",
  "key10": "27yL33KYFTyamsPDFuFnh1hU6xAuwS5XvNNnyjKTwAvMv9rLmtLrShdj4pVMPhAKs3tmts51JBLGq1VFW4dEc2c7",
  "key11": "4pjjyDFkCSsYM5arBD7KLsmb7KfEfo1Gaq191BBhoijDt9iSW35QjuPzjovSqG8wft69KZP5X88tky6uLKDKMxbo",
  "key12": "3E644CQAoSBW1LLGbbPfkgJMAyQCdMzxkpG27ikNc2ZPMjdKoLnFvWrhmzNy8nUxRukR1WUNwiJ4PsixYy5p6i8d",
  "key13": "5qgY48ESPRyCo984BRtpDpRrCGFBAomdqpCzPVMnwVPfDPmTGn727zpYfcUm3WvCHPsUPocwucw99YcbGXTFZAgA",
  "key14": "2qo5hZrFzKBCbghuUfoPBNW8HuRc9bgBVaSvPRqztt1nKwaEVs5YuCvgmo4S2RY3Q1fatsPDucocidYrLU3CFtsu",
  "key15": "24MF4QHVbN3pjNnfQRS8XecaMHwfPSSd8ePv8TWzLLf4iFuMeTnpS8TLB4jp2ubijVhFRs4E5hpse9LH19CmJUNk",
  "key16": "4VVQARnUrfrnV4Y1qvGB16UDHVXrowGWp9VTZsEfepFvnkGpj5549xmvP5tDjrYmSsXkjzad82UpeMH3cGR88WHx",
  "key17": "57M2Yz2m1tY93b4TtfEZbdi1UQ9C89RBPhjsVJGaRZEF6AKanvAiBbKC6bd46moZRRmiPfmt8aZQ8J8pfcJuR5KE",
  "key18": "41ZDYMUkytTmpcP1Jngynxc3xc8tXFJnPSCVd6YDFPcjBrFaCkQxvBjxaBP65SfAmMvekQX26sHMe6ZAKTWipviL",
  "key19": "4NHGzWoX8PN3YueUsfeNyWijmaNraLFXk8EN51qPAuHMyjuFJ2FkvztNxa9AYaUieqJGhfp1fNigvzhdpU5QVp5A",
  "key20": "4VP5kvQRdG2BB2EphzZneb5fwkaN6R3zH4dcX3bvG5J3oXdTrHDeJVx3ms7kocUiPLBm3q8jrvQbevzLNDirUGL2",
  "key21": "38wh2MpSdBbzjr5qCh16Rw1hCe46BYhkCwHJCvwM4bouwmLsj7PGMdDDFKG6pfmGxSXP6d9B89sBw5Kn2Cw1nteG",
  "key22": "32hp3vJkzEbC3m3wDDtf6dBbLLiQv8aQPLooh8F1cZGmeTK4hCcvDeYaoXg7EJxXUZqpkWASS774Q2Riuq9Ba27T",
  "key23": "3p6dnTKHK5wSkifDhWbez82ZXenS1mp1Eg8GvWCXio11bajPokfZtDhYFcA5sBXaCwf6QYosvoojGTcTQxr8ccEN",
  "key24": "3C3Y4QqzeGubMMU7gqnxbXgj89CnmTNKHGmFFMPRLtXcjjmpFzF1jZYuniZh8kCMst3atVj3eyLurKAUVBv8Jne5",
  "key25": "ThiFqPSfG8QqYpU4ZtrWEHnoZ7Kkkvpsed57vfgVPMUHiw2niRCSxQYrrj5cACFcQTsogHtJSyLLkRa6UVihaqA",
  "key26": "5b1EUtYRxS3h7e3wEVhUdZQoki5MySim7L5qhpu4kNHBTgBD8LwwL4EaL6WUbyZogvU4SCBLuqjHixBmoHUkHEW2",
  "key27": "fe54X87EcadfDbZcDVBmFJDAvXf5u1UhXokUwWymPDquCDa48kb7gUDkjymZUrfY2yFqCxTe2fBbA3n6285XDjY",
  "key28": "5krFeXgkYew8hwkG2VzF4Ho6KmVf6DRbtruTELugEvnkJL4jthmW6PrkfQSHS7XVXhbPACbu6ma3oBEtUd561sXY"
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
