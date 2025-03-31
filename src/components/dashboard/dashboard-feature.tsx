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
    "63yeFiJwspQeMdwf57qS7Gm5VXNheQoQgtJymEVzoefvjoP6Fb1nCKoRYJCKj4JZRTxrMDuVNnApDVKCXXz7Ap4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHXmWg5uUUxvyRCyUdMDFW6Wzkg38RtvamDgRyiV1LhFAHLtX4u9tQiJyh9JWaRMocnRzRoaHJ674aBUVGdAY7g",
  "key1": "5QbBSN2T2VGM4DzGcgH5yMrz9MYuGjde4CYkoevvWGW1A38rreaZiAFJvXmL2XMtCTamhKG5D3uFqgRtS8KetDCs",
  "key2": "66SBQwkixb2ziHuTZap6iFoKXX58Z8VbSa4uVCKMwxYpiS9k9A8JtZiAKDvoNHmNJFhXxGfRy3rqvfw1JtXHuYEp",
  "key3": "5sFwoYhC8EHEbfpDTCQJgqhNe9knB8MZDJBRRG3iqG7kFrRphxPXSSyoUHdA8m8KHDyWJ6od1ULriEFznbvPYFHK",
  "key4": "3YeDLQPNzP9FMMRZRnsR3rTBXZJyvQ3Rxvi2Ps1Y7ZThuZNyJSsisNR3vWVnCxsVvNjcFrNczgxK8c61Y97HPXmp",
  "key5": "pFy1sfXEBWomVxqEYTDrRfdvyPKeK6wmvVcqy4uZf2Z6m2vUc7zn3me6i1QbuR1kkuRRidkg28tLFGALaZkZoBz",
  "key6": "1RFFJn3TWcG7SN3FQTeTnvcHbuvNtcQ8uH6teaQ4zLGL4DdsVGUB3vMoVsGG9Up25LNemj2hMbGDn3ifu6NtAGR",
  "key7": "5Wz277AL3QQC9XMb8yBve79rERPy9txqHmrCDLXe7c1tAiGHD9EkY8TZu6b7neAafcSjvwUboUUiudfpoi79nfF4",
  "key8": "2d1xyGztfZev79CrjfjgcVN8hq6uovdNrrytkNu13WMmGP5Ap5tFNAG2penhpBcYrkLVXdeH38uEMA6R5Kt3S57e",
  "key9": "2kqJchM7Bcr264PsSPfLf6UFtPHnzDDUoFC5hvLNgy6ZDsrBsKmMjDuDR1Mxt5uWfh9cHouEqJ91UiWJxesEhDCB",
  "key10": "21dNeKRKo9WetypzZC5aZz5fyDmCt5aDLjpCGu8dih18cQ8pjHW8XbEsQT5EnujyaSXtr8WnjdnqbucfxTnVifR6",
  "key11": "4hc4YCB8LnF7MJsGhX99bCiHEqsXYVdNSsm68P5Cqd8CCvG15vW8EkXZ3PBFDr2dY7P6KBiM2mng11dV2UpLe6JX",
  "key12": "2LtZXgbDPsCqdDdHENC52TupVenJUsQyiwe4dhvC96n75Q2CTErnoB8chV8FUsja3JEskGsXZBJcg7cm3UjNyaUe",
  "key13": "3kkSJGFQZ84CX1eCgf35T7fnMEnPFZwxWrw5JHzu9igGctDzhQZjniSRJxsG2huL3y1TJiYVY2ZohzRhBaMr1Uy8",
  "key14": "3phEVnqmp85SpQGLaVxk7gBG2HgXJ2uocRJwwVrQ5pHsvFWWV4oCmGjWGhsndswNQoTEb43Z7Y5sc7zrL21SMkJp",
  "key15": "3DXtep5TZ2rAux2qMDhbHeyWpJhmj4KNsyZBLf1ntgXcUTPRoLxgD7XHzaVaCPNaY8uULDdZ41rJMBsDUBA2KDbH",
  "key16": "3eVeXQJ3iUPQouwh6YqB4nCGqy6stYujzv4VVTNoSUAJrswJa8CHRdDuRMXu1QtVhgrdA9NppFksJYKEor7rjwBf",
  "key17": "FAkmqC5QErur3mP1H9zgzyWdppnJS6GmsdozvuU9BTNHF6JqCffW1iXE1vBvivxJpGfpX6B5EBD9boGUKEuc5w7",
  "key18": "4BpMCU2B6c75Pnp5V5KvGMUESt7yehvsYfBUkR4GPgyrT2c4ir9eBZxmd7t2MSd83rFxKSWocpb2Us4mbcsQ2qUS",
  "key19": "8Wg7LCGuReuFjrQCTVvRsA92V13uSc7Qg9irYKe2CK46TjSn1tdkC4kgon5QvtwX2VPdJKAKrQ1iNQQTkR5ujaW",
  "key20": "28knHUoqqqXJ7aeEku7h92iumof4qMQHPZVATdPS2EMSHUveL4MeB7W1s2pU8WAARnDmJ2rNszCDVZXNgTLpZibC",
  "key21": "2pg6vq6n1TzehUnKaoZnEnk2M4qpVXWYTffKNwi3WEipJdQnQQr9mZaQD4VN4aR3PjDv4LieWmGDYEne2WogPnuo",
  "key22": "5ZLTYia2rEALMWyqo8NgB5iL4QhJkdN48ewMAVLBjpXUbArpAn7g4kBzAKJ9aqxXW2WLVYzvuWGm4QUbArkS8e5H",
  "key23": "4NaxtwuPZsS4zRxeFvR9bzJUJhi11bT96awfz8BAkAAdPX7FUJ9TUUMehh9P32LrgruCWRERgiet4hmvRaN7djQL",
  "key24": "5RruxHF1L5NHNohFDmh8qsF86q66PMyYUc51SVViDXZEG5E4W7kweaCQCE5SQ3v3tGXiBB478B4KPjBrQ3eAcegY",
  "key25": "2B1B8cHFc97VokZQuC4it1xU2g9Kx1CxSH4pUBj67bEvgvBnzdtJUs5N87PKc32dcq17LSZHpJ2GesCJ2XCzCXMC",
  "key26": "3BcYYa5B352xQu6T45vYmSDLy71ray6kg4AwKnUh8DHRnDYef7UDfAztoghfkfSSoNisWAAztxwGqKiVzUPDbH5e",
  "key27": "5PPTUtQfrpUcveZ9e4CieKyN3Mk6AXZCpnojaWsPKtCy6pxjL1Ds76szd7NPGi1srzSwLKxkkMwAUYAD7XwTV5GP",
  "key28": "43EvErSc76zbj9dhrscqcFhynvb2YnjWG13yCxxMggeaw2wxnZ7hCGaR2vxJrimusNqTv2N5jfyjzmm1A1eEzBfS",
  "key29": "56VdkEnxbgn8qS7JbNKQNjMGwWzppE8YCjEnqtZXANJhxCY53XXFeEGhuEp8FAatGEdLBijPveVwZn363283UMFk",
  "key30": "4VsgNNz8hycEpjeCb5uLkEQ7HwvzS5H1gZ1kubBu8G76pFicB6LBnVDoJimJLKrzNaCpuQT1BZN96tVZjpvLEiA7",
  "key31": "3P94zaoJSwzvdyRdsUURFoBvKCDJ8iKyx2kuaVVG5ai3sWSUrjSqRdBJQzs2UkMV5pwDjnqPHueZAjEaUt38qEmZ",
  "key32": "4qFNS57LaTe9DExkcmnnjg38gFoNghcdeie8u8CP78eezsiAB78AnLzuJ9yMjgJ2WfqbjdwmjWxGrh9GcqHrwhyv"
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
