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
    "2ZoVCCAhewv2h1Q3YEMuxgqKC2NtykkCyEzc6pJ9hsZmYHnEjs4pqGRMEbRtWju1YfTSJ8P7m3E7z1UN81MhmJtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wThw4hmPov7zDpbZ7uebP17tGGCPxGaK7euoTgAp65q6WovxYYRLN8CkZmD1Lh7KuPRTMApQJuGTJmBRTvoRm7g",
  "key1": "RG3WLqNYRY43eMfYprV74UCNSixk7vDASNijyYSDShY7CgwbdLbTSZArvva57NocCeZ1Fs9hJXJTMMJ4yY5aAPk",
  "key2": "ip21SonPwB36gHEKpHQqpLKmabkpSLGXEmxnQLspqMRSsMhaJFCqjccaWV4svw9sArbnCoaguoBXyUp4hrHT4hW",
  "key3": "6LhnAb4wj82bNmFVLkR1Bjuzv8pAuLMEQ2idLkkHk5jsxBtc6eZAn5wmQWLgfoHj8ByH7YAUooBtv8Euwp9gE7j",
  "key4": "8vP1LyzkvXPoAMranVicbE6ui9xYU8acctftpJ1HKTomrUdnq26Wt6RHi5a252J8FT9QZzokvNRvdV9B1WXYBHK",
  "key5": "vFW2PkbRJVFSgLCfeZjigVTRvSTNzuohQ5C5CKoZrkhNKGgRUYAV4UViEjufP3kxZTSmK8o6RmpT1c3oBhYRiJ7",
  "key6": "4Z4LmZi6Ab4LordwuNHxYcEqUiqoqwhvVFLKtw6dGMUHfiQdrznP2Wne2XskSLWJW1ZUwB8tqLLUfACbrz5kUvKm",
  "key7": "2daQ1J7x4q143G9hLJTpqcFFjFbzub9Bo157FASQzV4qpAmA7UJZKinAfGt1FKCZCTSRpACQ1ixVVstXFwtXS3FX",
  "key8": "3LuWuGBtVFnkBadD1URVnrnfDmnNV829rAxn1dbBGrKPJFdu2EP292Y6mhux6q6BTt9fquLHMZwAfTdebbhCZjZ5",
  "key9": "3XzJFiq24W33i73T4Ea12KqkEeAfWrznzJGAAgvZ5CkAGKZnuxy6hGNwyG4wTnAyZze11Hrh2Wv9iwnk44y8FF16",
  "key10": "65kpcNEpYpCpukZAggeduXxaf1HMAtQuNuVxYSKBQZJQwmbGJXoTcnbYGNXkRBSY9BxoyHV7RQwZm893wK2qN2qB",
  "key11": "4Nff9JXaWRSTAqpGHL5jbmjYzDcnkKwsXL1zvTCJF4QT2ZqdjiDJL3R3zbYoGtYceStGEMLzgX1q9d3vmtSXWYYu",
  "key12": "2195wRC42tSi5y8SoLa41PNPzP8R3KrAPEfyy7e8MLF3b9Y4smc41MK7F3PCdKQibYjbky13m4RQJzW5u6xFW6An",
  "key13": "2eczsFbTAhkzqSuhgDm5CnLsvV8zucHAjEZ29CMtHdgD6NWAfEUSupPyPk4YC9Zu2xKgGktyyeZrPcwb1dVAsQJQ",
  "key14": "2xAGhiY2sLLjhvbTs1vjfYuXLH51ZE5zPNx6gykkvTvGkdXjLFKdi7AnMAjTVWkTr18ARCKtv9fitSqaXJGBK2SE",
  "key15": "35REbLZVWAuvxGKuJBuAvPmdT7Rh2t64Ri4ahF3sFNvskptBivfv2tFzc5gki3AdMtHTBwtGW6udkrJKJDRyHFbS",
  "key16": "34FmSrxMZuYsL6zwFKFRJhHYEgTb8Qu9Df88Fsf6TZsYqQuLiR63Mi4YiXFvd6BzbRuPdfmyaBVb4Pw69BTdnB9q",
  "key17": "49GkmviJ1K7KHJNYtgYzYCA7TMFTBt5GXdGdwZM6aVaMqWNjn1KgoHm6t9Yx2FUNxosZyrRFC9qyvRrR1ijDGaaw",
  "key18": "232jXGFuq4NbU187AaLy3iipnrBKThBtuYdG4Ybt3dBfZ5BgnuLXK4U4W7gqVeLyvtPwFuMjJtb3d2SAbfcy4KkC",
  "key19": "3R2cY3dEcWxeA8MvHyUNBQyqz6gThmsPscyiSX3jupftzWnDZcZcvvPFwEHz4UzPTsUDXJMb3pfqG4qccnRtZbDj",
  "key20": "64VqHxhZMPJrxzEnS8SsohhcWwJ9ujZyMAtdGV3om2mk64ehtPvxSeYVnr3djgbQiXCzgqiskCmmZCdCg8j4n1AC",
  "key21": "4GHqtEp1USGth12Z8Mn2vU8ieUcXKNyWcCJe8xi3FhFWeaKHepezCVDf4U4qxUVi7gap12YaHVWbyrQctAHKvjEH",
  "key22": "4oi5MpdUphM7qpbq4krRWZ9vaayabciNyFLA69Q7RiUnzScyQzNuVNaGWDCaRAsK5R8RUdvZsJP9og7Tw1GJcLfT",
  "key23": "FtRYULcnthYqkJyj6uNiGbjuxuhrTDB41ApVgPBEALs48JDSgB9ZXLZffepEfpGsz7buG5tK3SJ7gWGeqwoiH6G",
  "key24": "2XF4Nhg8GnBypC6kkVmfK8svnQRar8Z7RdeNFnS19PsyzCYywgxzY7ZXKSKq8JaNuwxwjq6HyDDhxpwQ5e8oSV5t",
  "key25": "4K6ng65LQzwDBJoPBXhNdrTVR5pwJnnexjVovtmYqEeJY1wcXkm2mvCKTW4bbL48tfh5EtKeWKBK3amJf8ai487h",
  "key26": "53nvsuetFXnk9gFJ1fDJK8DLvsouhQw3XSp2C77KJm4GR8bMgfYhjSRtJdx2YabqLZEQLfEukj1nQYyRiV96huLN",
  "key27": "3mcw6PRJZVADjvWKLsUybgtvBz6UND2JPpiyXQehT27DQYQVDHBZUX7Mi4gxbWC4fMAVB6k5pieZmJjh1vimDfCL"
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
