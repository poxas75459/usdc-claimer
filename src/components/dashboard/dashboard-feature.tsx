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
    "3MsVX2cP7aZNaVkVdSznNATUoBeEM4jFyqd2dwSiykDx8Ag56FhLB9R57dpgviYfai7zqAP2Sxh7jqP7jj2H6spf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jhWsBAiMViAyFiQ1haxVZTsqMXBbLDPpsg9R73LXWV576eCtgNhGo8GKn1P11vvTN8EJpuL3uwR7QetEQZUNsWg",
  "key1": "2LBqf7dYJoWdQzdRDTMQeaMBDDG62LiDGnuqRfL2wNEZeCvzXcsUim6H2fmsA7bp4xGjnJbMHAGVkCbz4C1PYJEx",
  "key2": "k4orcnNZ5r2iGnu1R3BtNWmzRzuBq7fcZxn3fZgwPPQrBXdhhbC97XRZVpYU99Pdc4difyRLpaGHbXQzh5opaJW",
  "key3": "4vpSQ4d5Zr1qdMtY1eMXwxgyXmphVH5R9WBwPRnz7z4E6RmEKsTHKmbnFETfkHCY4FxSpHwWnZ649qdv6qaVtU9T",
  "key4": "2s1V5CiM9y6Sw8MNgDpKDdMH3SrJJpqDezoqSXdYSKv9Bt9kG1iMRw6d3b87gyxh7phKDhe1z1HLdaJgiaPFeCqj",
  "key5": "55HrsWkVXVLGADuykryC9vcSt3nEYtwSF61BrxjJsxq1z9KSTHVke5Qt7KHW4NsWrxGfAgo7UCdjc1TTpNaSc1Z9",
  "key6": "5aS29VBEJgX2GWT7t9Fk6afVXU3T6GhwNmzsjVChtzHzhuo7ZaD8j4BxqtbjEqUyRc2mFrqt1wJDNRuwNqMsNPES",
  "key7": "2ToSZsVPqFxowPusrh4CfUPzPdLjW6nRp7ZAFb19Kw6HPPKsXZJ1unMAVTw4F7P18SmR5EAsLBaKFVY6rVfpkmqL",
  "key8": "38DnEwzPmatDX2BpFfp8VNCySdunFBCpBAbiTRaRviPDiY6rKdPaFRoGNcg4mSHxcNeg5N8Z3EEbxshtfuPNPwgr",
  "key9": "vz3eb3dQvWDzBZrgkhG1bigwfPZUJiBjT3szsodbLbda4WWmmmwi6HTUBx28Kf1iF55t54iDfZHejB4ExF8HsRY",
  "key10": "tAouDuiLGvDQHMR6jAfqYFw2Q8L9t1A1iWKK5BF72vGKow9WjucwzZhDymZoJBKJvyJgSianpusxd1Zi82CugNm",
  "key11": "3ucGJC2A6kG7W7DogYF8pGBqUaGaus27dWrSu2DQdRSTLgiiFZSwVvVYtprqEyKKsBz51RLsAWxg8dJ4RJLZsnTH",
  "key12": "gkaBGDVG6v6NyT7AboBiPqpUUuUsBjkJkZ9DkapcMGk4ZvJ4cgkjBDwRbX43YYfck1Bcn9768SsKaFmcEK2swW1",
  "key13": "3VY5Te2GfsS3BviLvuYFXQQUosee3outyZWKSbw7rasZeRzYnm6MMCs4ZkydFBdSpJVhjE6pj8E7m3usCSCvucTB",
  "key14": "5vkNJy5uahDtHVrNbwL3p2NXFBedTng5hy8fHPcMZwf8RzxKhZPHk7a6AofvVHrUjvt5fDcynPsMZ916xq63u1rH",
  "key15": "5wTATWFuMGN2RZHhcxWKWyHp3o1EdJNagmDxW49hAC2AjLoLm599SMovqRA6sTMpsJ54829Wtv4hUQEhmyCRkEgN",
  "key16": "3UwxxoNJ5wdYtE9vH9sYXCnoVwWi8PLeG6tVBDjeCpKzfbN6LY8Ltkz77mp7MLvXmQuAYFxE2c2D6rYy2SYPypWi",
  "key17": "59p1x4dLe7KHdpxmbML12BC8PdMYMPgySK93AcF2uWgoyDhZW9C7fH46uUpEgRxr5CHzCiy25cdn6ats7ko22pUP",
  "key18": "3ZmyS9qwWqREswg3ZunEiyd4Aend9Q1HQnCaXaxApVBHjUGKRe9fdN3QPKYwnDNkHYwzGcjVDCHfYnBF15UWMkvZ",
  "key19": "2ZuZnbbrQaVndYBC6uVnPx5wqoJz9Tj4pjKZ7PXf1ynKGFcGz3SfQf7RBnLozojHavKs1rMmLvoDYJ3cy2igHMXH",
  "key20": "E8mP9t68W11FBVj6TrRzxf9uWtq5aERqFEekrCxpZwNdZK5xxR73Akg79SXQtvaZn7SSpM4q4b2MMR9ENMU69oc",
  "key21": "7M9orGkvBmYTD3Xi7GnmtKLPBHVGZX34a8sVseSYxRhY8DtzbGGuV1Jm7fsFqNMMkKZEsyCbnedxH4jzABkqycW",
  "key22": "2LWxnBRfvaa4iqFkdi1opjCc1pBZB8eNzoUPkNp2KdvaR8N5PKBP6oyzspDpeqdYj39Bo2DvJvrvBZYSbcLJjsrE",
  "key23": "5gWw2YHRb1gsVBDn62E7NRheJWQcnraSMdCmsirfQ6xNEVY87EgMVPHeUJsvoe947iz9JX4QTnfAq2ThrqVGDQog",
  "key24": "5Ewj1iazbZp2CqncPWagnXmDLgksWw4vcg4nAkWXTUZDwBnqZgnjRiRJe4vUxBVGBDGuHzxL6m87jyhaxJiK5xh8",
  "key25": "XZzfhnJJHQCokrXkLGD13Tt8A3g34gvKYK8DKnMPFiQ2GWrcdSRBe8AKoVCGWTHWGxpB6y61CrMYuLyDUEK3HoJ",
  "key26": "x9aktx1xpwmwro5JyrhrWDWjhvrCYXVAvSEdg9pMv1LCNgTJoeGV96w42gNaBbLhS8f2y42wvotaars366QpcXF"
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
