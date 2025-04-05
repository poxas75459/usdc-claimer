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
    "LooA2XjK7iiyQcevDU2PWhMKdeKqpUFZs6VViMvRymz4uCnpCxyy6th639moNa6jjJWCQSgM3AN6r9nDvQDRKvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGWr5bccC8vB5zcbiGETxsZ6phMxSERgMnJjPb8WcvmAgq7AKuPsDccdPR2veTmPj86K5LrLQK9f7treAaxvDcA",
  "key1": "KsXfsmR25BwwjCNsRqvc9QtVyJcVVLndNrR8iB5z1xCb5dmq6TgWLqRoRvSSMrsfCYwwZc7FyBioGjcvTokMKYP",
  "key2": "2coAQRkjGFKdcJchUBuYf85V4EREBQamws4MYi7bgibYqETGdbBuhpDa2P6RYnbiRgrqe2sn913NShF6aFVXFyRQ",
  "key3": "21oyHRAx36eGBG4pNR33yWTi4FwRjSuxib7dcDwZ1mCe1P2jaPKuTxp2vPa8Lu8dojYXx3AYezTLf3cxVWpw1dhQ",
  "key4": "3hjHfyZqy7e5FQCKA4zZhySBTizfpZWgC3Q7Zsncojq2D8dEUMRPAtLfec3BRVzQRr3qEkYvGcztRmUtF2SKHXnC",
  "key5": "2cyTZcPyt3g8jWhtnyDz79CRLvVPdiy2W8RZsUTmsGkPz19dRvv1DHagmXqMitriN2ZuFZPBSzjZfXrNgbbryZJ6",
  "key6": "3cUvbLkG3PE5fAb3toF58FivUrXzzT4ABU5uovAn1wVsjELzAnDM9W1bwWhukBou6t3Vr7wqbX9VyV5CUrk3TVUc",
  "key7": "4F2rDEWY6S6fbwvwjGdZghSw1ZFH2N6cXMExrXThJw6W9TyaDZHM3G31eS6m6m258UZXZu44FbDFWdRiuQkaE81K",
  "key8": "F6BjTHjvXQh5AjKQvX4vVt4cVyTQoUfjDYRYoRgCVJyv3ZU4zPsfnBG8Yrrncr9jtpZAu495btMRvo1tb9JhtwJ",
  "key9": "3Se4sWUvd8wmGPxHWfXe6kdLWcCdbHVHykYafK2mP5Mknw7Z8DZaSwWaoFwy991BffE2ztCJJb3EL19htc2AFK4b",
  "key10": "25vHSy36ZisTbFSj4HajGsrpUQfuPV41PzfJ25nrYS5AbKRcjybV4cXBqRDkB1xzFQkkU3JCEwo5Xcrmjg4uhCNV",
  "key11": "1PA31LuM2HSWJRwEDgJN8B4dVQNG8NYtKNUWMnbFqBzkZim5upn9ZVDfG2zv7hYna9jx15p4GGzzgQxkXuxnTvH",
  "key12": "VikCz6sLcDNpm5CehBGkFRLdVJ4zVGTZGHxukUfW4Xg5uysMV4Dv9PVYrX67H7xFWfoPqgfBbZN4RJNmPE4WzS5",
  "key13": "5AE8fjBBozxuw2qa16cwuUgMhBKbd65ELD9HwetEuSYMqgzdTLXJgUFBodk7NFY8m3geVtJrdaxXVUD394DTevuB",
  "key14": "56SwC4gxL428TjwZY5gxruv9rnQbUz1vhd9DUxz4aUf5XZfV4R17JuHitprpzRUZ3jstrEN6Cady26FvQthyLBdR",
  "key15": "ugCYbpogn43HtcbtFmYu254XLtWFKAtdvCqwHTWzzKBsywzhGMi9JztvYMKxELFkx9uPoVL2byUKvJvELVcKvRx",
  "key16": "4aunvJoPcUXDBUDtF4J3NvZCNYoMMUjAppcsd1X5KD3nZkMrpezGJ3EuouRZowZ7Gj5v7VSonxreR9XecNTk1gGf",
  "key17": "qT3PJdbMXCMVDqUmhSecVWLut895BphYEFNqQEAkn7cWyzPYdDpr6FuVN57CexebYXfRUNmZvd6DbQu7rrqfkNq",
  "key18": "2tu97r5K8KcbWLpMuRNJ1qYmizdbjjW3dw4ri4duC6ZDJRDneceQXg9V4uGKan65QsaUu2taUjMeAqC99FudLWXD",
  "key19": "2Azp3oGiTFRsKwgUzmEQTtywHC2HuehEZkximkzcFUMPMAXB1SdmZNbDuGnxzqe3FSUxcKFaxPfa5xiTsb4YoWBG",
  "key20": "3UnrKr68aGswWothqEgEkFxNpT1rjib3iCfSfyT1u6dZPcyXhYtsCj9Rd44ww99UDUrWw9UGMDRseqL9P7d9TXGy",
  "key21": "51Ghb6k3HBHPgq2eGkiZepxPuc7J6HmfDYa1AjqURt1qhUxpvnt62FiWSF2zcTroTbZ4ne4rMe1J2KnondcKgaCp",
  "key22": "5r8XGwZqE8ihaE93GHQV3KnF9ZHJa6hjmiWp1KWctMGDGNQ9M8G6z7Lf33Ekd1x6bVmFBqTPBJS76ygTDc1DjgfH",
  "key23": "65ecMjfB7WR9Gmdycv9GMJL1VDiGy84WmKkCamgBte5V8CTNvJBdNRPGRVHEJUPC9rYxWh1d7XiBtH2qcijybRuh",
  "key24": "5XHG54xNjWH52HbZHTjxL6ctQrxg5gWyzoN4vZAbTSwJZeXcFYUEvS9pAVtcmqz6UKFsyimGN9jTidGVCZhizFv4",
  "key25": "PFmyFSZdNjtkgU53XCT25jqpqo8n5iNTHwTKFUr4wZJhdvMjJj3WLymvSg3NtEzScveAAcv2MNzbJEyBfptPk8G",
  "key26": "qGfYMFiTp1RrFcqriS6nWzS2kugqVqYWLHduWHfwgwqaMqXxfar2i3n7MgiuvDZQXafMo4gRXn6yw5zAYcgoyqk",
  "key27": "m9RshMhru7h9HZPdwtNqWSA4S118yXEnfQH5Ex1Q8WFAz4CaymsbtVaP9x9eit4Myjh42HsuEee5zWKQQQKQgE3"
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
