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
    "2LNfHHKSzy5bQ4cDgS3TLC9YizjSUc1kixmax7AtVGNbNKCf3zT2vd2m738taNZKfS95AhiuAZqn65HfYbszCvHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oigagr39odb814h1hrxFc6N6bcqbFi7VHiGsGBiZ5hyARCP6yZZsQLG6EZY32GkQzmHUP2iYZayhSKZK8KR6dPH",
  "key1": "3CeSK3FCtc5TPpLS7GorPdBnNTRxmX4X274iR5Ucx4nMB7iUFNYVMNBZsuBoAnnCSjhPqiAY3Wp2iu2tGFu9hcZ2",
  "key2": "5gatVkCiCTWFmGvBBTwP5whhJc1zns1ADJAuAyqygv1otqAPxPATqNbqvzuFfcQThHJY6gwbtEZgf3D6QZgSfwzy",
  "key3": "2fVQu4hGdeZ7sPMwByBpdizyGMzG62ttPRU9GbgrTgXdpfQGhN5WXLDVuwkdjMcM6w9eb5EcpxP7VwxF4RcgyRwG",
  "key4": "4izcTKiaP92znp8g2hQHV2DY6gLdT39vKtDTYUijQPMdZQDX5nPEWfT1WwscWAhPCb6L8tfLkxbe8QinbQHnskAw",
  "key5": "4nQjH178uSyMd3mhB8QZgYtdEa1CxsuywFegxdDk8URrxsQdMrLLGqjzZWshttT19GFx55TGPYzvvzVK9t9iYjbi",
  "key6": "4kJgZfV3o1s7ox6LG9pzW1seeXYsfGQTeZdMEzPKb64gqXPF9ixNTz7h5S6A2w5qGpdMuAM98jz4Tm7cfzTQqP1y",
  "key7": "5ZTunMrERgGmEeshco76AQiork8k4zKYVhxyicN95u8sbdRAjhQgSQeZqKTuj5NSWPnKY7bfXbhZHCYZMDFVgkB7",
  "key8": "4DLdf3z4wat34gCSDv9vzkiq5N5Hh6SKo4M2nBovnmfXZbrPu6RcauXUk94Nk45Lt95VgEoNgEXVt4qdUkLtQadA",
  "key9": "TGHSViGVRtAVU1op98Wybc4pt7zn8z63xFTPKyK61KS17zbQgSmcwnmtBrHTyoC68vpTGREesiSwmHTpw3c7H4m",
  "key10": "4oiCNDz7nX7ebVLBaMgwwKYqMz4wSwffAdq7uTjE2cYZ9BgjBgaw6uzb9i3hjKEwDnUARztzBbWDkZrV9AvnUFvS",
  "key11": "5nRWvKfu1c9eLeUxpViKfzN9y6D4CrNsj68NVFjuzG28W25Ry1VVpv41NiPisiBZYcVBjWMaZShCCrZAVCEJmAQm",
  "key12": "56hM2NCLDV9DjsY85zra3dJJDfQm572LuVDukn3sgqn3fJ9iTHZDncuwoBSJENpXt99oCSmkvdZG8mxERV7kxk4G",
  "key13": "5zuxDTDST5Em8dPq7F8B1Z3Ce99da5eefxcrwhVji37aWGioXVAron5CX9boR6bERFFaMPnE44GFBDSnU7CiHmEC",
  "key14": "zQy8wxce6btNFzardbjw27o5MY9ckhUfRBPS5FidoYCizgZbPJmSRhsKreS6wKg6M1D2GJ6nw9mf36xa6XkcSMV",
  "key15": "4HmeAkcftEnU8nr4M32qZWmnKfQtJVP96ZHsaYbcdVD4259EGiGojQCikJE4Yvv7aCKpWv4cgiNYdUJ5QSE3FsWV",
  "key16": "56p9jv26KCgyivzTKvsAPYUBpFRwU41z9FdBF21u4h6DJ26qhtZWBY6por5EMMB47DmLfW1Z9QUWzUVvhW2xoQZG",
  "key17": "3Xqdywy14An8LNkMBKimL6nRiyMNXQueNWDsygamm7CddZB7p4tqnQgD2x9NnLtnuWuRBnhkqQYXzpK7dMwmXu4Y",
  "key18": "7RmvaUsneqUirhXoRwG8Z1p94Ynt4e6PijzBD5tvEQ249M1E4KJu3aRDFBZvJZmnYB1Wx2bcdF5ZpfiK6B1C4c8",
  "key19": "qanWuz9josxcfkwNavq6t9GdkxcJ5gbJqdmUrneZwo5wDVHdwJfabRJU9iarf2owVHEYVbzyTyH592g31DzvMQ4",
  "key20": "5ZLLfdfgzqTrnYzrQwjoqnR7GM1mVkkaiuMVsmC3wWYk1bo8f8k9d18hjiHFaxqsWMqWSCpVQZoPxcuZrLL4SxuX",
  "key21": "3EyRLiofTi5hzEQ5REMMN5uZDUkn78yKWVaukEEn7TvSaRPSv6P5HaDkcYq63pV4DCab9bMTx69Do9feu7ygws9D",
  "key22": "UKT7SU3KbEdVwFykXBKsz5LRZJ7FNVzG87ZeXNaWs3uMt6Y8mQbqnfnTNMfGQkhQ8i5THYDe2zzzhuXSMgz22QP",
  "key23": "MWVMw4PBGnqq8txNRyw9f8wfR1BnBbLAsYFP4CX5cr3ToKfCdQDPwz8g5Dfr8FRtiQ9gzbVVhDgBWj8nUd6Xeix",
  "key24": "CtzjtSPhT6QbCB2tE5LAx8hKTy81E7X3tckH4oTeSkxVYqb84uvG5X13mcUaE8nBYCWL6WeGVVyaxtvVgNyaZux",
  "key25": "wz9NsNhq8sc5xCy1qB33McizVwWVQs4sn12HX84D1xHuVZ7mnEyfxbTsRaYtsDuEPpx4yao5haUa6B8dtwvAKzg",
  "key26": "5i6UrGYmWUkNFBKsFNsoBBnTobJfdyKTgVT2FfsjtUgWUwegfFHAgQsFyTgW8RxymrQvXokZD5j18b9r58hsSmUh",
  "key27": "48hEpn6erbFVPQhNFbtdi4617CzrLSj73i9vWeh3bnBHs6tqzdnLi4fUv8HhEEBpR5disGDGC273jV2QyN58fYPz",
  "key28": "2Mqfd8tYCUsu4M3QgnQ1wnAyHMBKr543VtthwjMfYiDUT7z6gLTfqFsSVWQomJCu6xa7XndmBf5sfS2pg7ypnN5d",
  "key29": "2Bts8zjT2wGh1isgaH7VxYVWZvP5RHvCDAKPks97UCoBkB8WqRGNYzatCioGYcLYtSsTLGMgFQVfK91WbSpREkng",
  "key30": "42CUnhBUCfGZX8uGiZHUax4djCTnmbknDoU8g5W4pjJ66RN4igYcMXbGeyctLip8gp2y5oNdXBzHRCyJDZooxUkt",
  "key31": "rBF8UsmNv1Hnk89RcdYYsPxd7jJuaDfQgU1gRKsS9x8yzJVmFHBDQRXR5oDDqhRmXourQRGHG6fdd8iKiJC7Vw6"
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
