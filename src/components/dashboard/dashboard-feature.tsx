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
    "4DFPaLZof39jfVh38xMFZ2Dvj3agEQ1pqLXirGvGPxojuPK487Y2WVjr5BxgUNurtp1Bd7gi151iYQLuWPsorYxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJrzdW4ihwjaTVXxK9H2acCEJEAUm3cRqz7ZYEVrHJubLnYCH8aPo6W7sKVPvaN3EQxULQakr2fhTuddcNAYHbf",
  "key1": "66ycbB37TzQyPqW7BQv1mbktsXQkuDktzaGt2EUDWQHLR1F3zeDPTWxVi8aUU69SYpeZVcfiajpnuTvZUXRtR1p7",
  "key2": "36PaFbJ5VhyqwUNnJhYQbJqST3opEcK5ZfTqzfgzAsEM7yVhu3DoikGrsE81ALAbZhoNVucEeQSzRojRKU435XCe",
  "key3": "Fm5puiDuVf6Uvrrt43y1sgsEWrsn2dfFVoiS1WZyqvtdVGJEVAZywyh2GQpVE5AaQBcRbLAJLgQ8r4Ysj2M9rnr",
  "key4": "M5boJWK4azVdWe1f2T8tt632vEK7ZHvWkchZbdjC4p5htv114pWvm5r1HvgD468Ksi9mwURG3bV5tQGRtH3KkCD",
  "key5": "48Jj4tcPvaPYwPnsQt2aPECjZYhtvmxHPDVDqEPokJvSR8doWFNUaRt2YETK6P8m9n4yfWsE3evkY1YXmmaZ7Xcn",
  "key6": "5a6gCHJurJDq987ZnRL9i95sJGNE23dLVPTQZB1hjiybdM7RB4dWVrfSwHYSXC7hA8sjnUtrYVbg3NkDBmkkcxy2",
  "key7": "4sXeH7sg2yPWuR2KJy18C8cckqzMnu1uVKopvKA1oUSNLbUZe3pyRHRMa7Cd23bBGnXGQU6NYk2xAyrZ3PRoNVFe",
  "key8": "J56dwKgJALAzBd8uLAPKW4pvgdDMpTnj2zzuZ9x6EJfL6qrWcxWujXSC4aDq6QKaHzYbNy2kh33PRtJWfoezw2g",
  "key9": "LNpsK1u3Dwqj5pz6vqRGpqX9CKRUVftZbVcTGyHZnj2PnnGQCMLvCQmnXNRHdhbC73L4Rz4tufYpauzJ8Kboyy9",
  "key10": "Lo1kjrZTEqbaUm3TYt91CMx7dW1oeNr3zfhwgU6Qk8V8gn4n4FGJmhWoquW8KGAsUK48DLMZFMNtQ94HHE2eGTQ",
  "key11": "2dXeP1evsvV1dhass3ZVuUwyQLNNC62rByieATLpW7mYXKnio2HiDt3TMJXq8cZtDDNaqCwqwF4CyKt65F2Uaj28",
  "key12": "681oXnq7epRfxWJ9AGmjMrYzqxmPhFTpd4zFDhpdhZRXwBuiRf3g1G9dh1DisVpkH3Z5NHpuwMrwwf4f7iXC6FX",
  "key13": "4DyD6PWkorKwesoSQVfJYQH3s8B7hNS6qEH6KaDHHhQAFS8xA5Ak5sLLeCHNpMvzHZjA8RKVzhAeMaKYTFe3yW5Z",
  "key14": "42oMErXYgb1nPQkSEc5wErk46vJncuamg43JUncTj9RjP4QVztYdnMoThrSBX8pvq4aZDq8GJ2wBzYL7aNEKAwU3",
  "key15": "2dqdDLrTEemJgvKLyDCt9dQXMt8U6mSS2pxL518dGVY3e6S5FuoaFonvnQNgsK8cpGjBM3FTdaj9eTqeVEiviqMR",
  "key16": "4NXTzZiBc4DY3udHVTjwq41WXuNbPCjH57w11VJoUuZAF5rFesULf5tAHK2nGg5PLhi55FgMTeg14cR4XepK8uWJ",
  "key17": "hhhdts3CR7KVoyk5fCjKEgLMermrYRunqT4ikkG8viSzmmLgR9rboopJo5a5myn51wZTgN4ruV3zHmMdNdQSdGy",
  "key18": "44bt6C54GefNSvRz5ive89A6RBQvj2aBeohT2FUwkF9y1LfiTTXBLyk3RDtb33RHf5rkKhX5XKSeKCSL9M4zuvSq",
  "key19": "3JuhfvLwtkrUxX2aDXLRKE8pKdsf6rZwdjiNjjich3Fw8twjywZVvkJAcYwo79tc5rSTrSRxrjsGoTxQbvUTWH9B",
  "key20": "5AoATBVXH5aTsEEGPMHpPY2Fvr3LTguw89iwr2c5E14Rxwqv58H1U87P8668QfMA1i9TeXsqbctFPTetkM71D6Gc",
  "key21": "61kmNKqcxVerMdHpbgzSqwx6ojBbzt5iVKtTzPAegp447DVHMFTgawn7EiNJb5vb2DLfJVY8cDmrm22rUg3LAmFk",
  "key22": "TvYQ245714b46tTDtRxfHqE8ASiHfdJRWGhSWBGUSRgUJC1B4CAYUYXYREg5xFuTCf92dTF2pu13uu5Xhexskvw",
  "key23": "2XnDHtkwCYbMydhNhZc99ufCmC2zPgjM8CUa3ckt2BNx1doLSUv6kX9k9GXTTuU9u1J73A62CTyW6jD5oL3Cerb7",
  "key24": "42RChTXyKNbszBsG7xkjR1tA4sZz5icwaRXnZY2sPPejM65Kff1zZF6jP17t96wBSunrhJ4Us5ZEu97HoSrgzNdB"
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
