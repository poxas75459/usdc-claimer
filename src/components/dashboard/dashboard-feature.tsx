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
    "362Tr4W7DH9w7LnGu6TrDJHGEmfwVGY5hDABRbx61oGC3Pu2gGdT9L36HRqW3dVLMn98n7P1fb8J7rfQnALvhZWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsKJCFYk63tNxpSbSHSm4TPeJnnZVcooJ4zDj2qcMHC3N45YLW9yHTDhjLnHkdLeutJCyHM3L6wyhdDmUL3niCt",
  "key1": "3DmNeLwXa5ux8dbfuwgAGcgDyF6exqSquvZvj6JJzbZPs9tCtzyDELVHStz5ctMDhgPjzvH4E3Jd9sVXAM5vcyFi",
  "key2": "53JnXxD9seXvrDyMiLbgPP8YVFAMbYpzHRcvRk25sUfRrzx2UqPv7Lxbg9duxSYGdaBhHqe99ta6AHbnaQ6boSRr",
  "key3": "5Pqgt9APY86ukwmUFt7krZnRUznWRSfw83E7nAYrsoaAKUhNFE9T7HC2gGdVBhjBb3VdGgL4TH2qEmhzE6xMTwoj",
  "key4": "348pGVDKQ5DfTzCpuWK3jpKgawa6z2BZWxvtP96Y8Ehvzi1uN5RbqWLL4xJQQeSbYoiyrMS6fiqvNsz2bdUYKU8s",
  "key5": "2KxZ3ZSTyisr1fDZ5eWAD45KbKJYVB85yMBnrWdsRUGCpenXL1dpyxqv88nTPF3ub4iwzD7jCyFTyKVvVHZkfd6w",
  "key6": "3j6sB4QJdQSMYRcRm9MpP4RKUw6Ff5SK4fm9eeYr2x2X6CLNwZ5SkXzekRGRtX9XdHTAXYNpsgHQgUCdUS95RMNt",
  "key7": "ti4hxxf89BiHES1mTbDZZxbR16LUCh43nypztQzwXcRgqQ3YDF7cSUYWXmBQ4ktLr8rwv3hnPFeBPAu1S4Fbe1p",
  "key8": "R2rCQN4uCsx3m81V2oCqEmAviFFSqi7iELey44fECT5iDsafebGty35Crw4d247WQVBy7BYuoLa6nqgjRGwfpbd",
  "key9": "3rnBPFwpyA8fEfke4twYmkBJaRwb1TBL956765koab2zCJeevuRSYBsWAz6qhmZPF6drAnAnatmgNM7Z1XUkcSpC",
  "key10": "jDVf2zr63tSsDNeEQoPndmX9Gi45uvUx4ZRbywACY6bigMTVHoe1wXBxtfpBd5Fqt9q2codd3BMdsDG5XF7XXJC",
  "key11": "VJkQ5yzm1R9f97D3QkDh3TZ1S4kftn3Ks7GppPgU9ySFstt2FeAHm8CvVDShEFACJ1QHocm9sNGChxwRq1CSeD3",
  "key12": "MnvzycjL25XKySHY54CFu34dhs4WQ5AFo1T2dupPFTHujqNCLqTQNEAeiyiW57rZRxXoPnMfY8VFAVVxW76gafV",
  "key13": "2BmnWd4UceT8VWPbbYFqMWohA8fabKwxtsGzfKZkPPSRQo81qvVgHBZD8zmKXQZp6CND63DfyWFWyDUbUZUGLrC4",
  "key14": "3EaZhCii7zHXbC7n68qjw7aaDdDmHbw2p7NGf5WQoe6uGnNPiD2SbGJmr2P5s7odfyjKYnKSriCxP7tFi2kjKx9N",
  "key15": "5wjHM4bm39tVwi2tZoJS7mP3QFBmbpXPmhaTkb6YhbtAfVnX2bEZVPLSAtMtpXD3xYuFAneWWik48kfW51mnz6Yz",
  "key16": "3zC4bajbw3z27qqL2xivEXZYLJu9BtXms9zx6hmwFDaz1HeodGu1cLrdDomHBxJixpcZRjN6vxiGdLhxu6Jidwh9",
  "key17": "3AKtPQMNyu2caETAqMmPgTntWrhaGeq2rmg6mWZDtVdCX48CYQP3JutXHqH3gAgPDyLhBSKjRwnJSchvxKZXjgfH",
  "key18": "Yzhwume2j3YCsszuXRMBpxr3G3AgTgGsVCNQGJfZ2PnuYbdfEnEBc26k6LPuQwQyq1VngyGWmgNeScf7Ew86rRd",
  "key19": "399yufEbpKajYsJJ2dbqwFJL5cycD3dtxCXQ9CS8jfRQczkbJ9cfadPcEnNPgQnts2KbfTBqPPvUy3fRVRy7EBKu",
  "key20": "2AWZqM5pWJsQSiK4L369RkbZVjpaNsLvJESp1djV3Gg4N4JstsSmCKZzXowpZyKNrzn7hjP1KXD6L751JrCaewRV",
  "key21": "3KdcRPrztMCqQx96eNN2S2NFmCsSb15H1FswRmUitNKFhE8oSM5qzQ9LzhHe4pDeD9rR8pmg83kDJHrGhepwPhe1",
  "key22": "5tjU8TJspZo4dbzhHqC5SxNd3Q9ZyzrdF1Z6UsyEtoiEtfdemWBDnfiJs7Vr4H5EvHzigCxR4LKZ2CyJDxeMqxQ8",
  "key23": "57hyv4es246oEBQmmKG32R5QbSpGubirZCpiRmADDKYZWHMXpKYcMrvex8kKWkutNWvyDNw6MKtpQF1yApb6SYKX",
  "key24": "5gZ7p9aguGGzhdDTRbpzTs9FLPf92dkzo9cLEhowirbp6YuqPeCDsutQGBceNyyozu8iRywxoMNZ91Geb2EpmfYa"
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
