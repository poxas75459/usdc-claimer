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
    "4kYuK3GxVev5w6B5JnWFes9kw71N4AB4L19J6ET5kCgriiZqArBM6o7Yq7hAS9F8ZGzP1qqEnQGs5wkUsmtYEqBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H1Q5XoKvHpW9T69NbjDr5yW7pe2snxHrb3yP4eY13HnQvmtdp1SjgV7fTa544194BkBCQY3TiXvshQQR7XezK15",
  "key1": "3XfdxcL5koTepNasZNRp4uPbAFEfmoa5tEBxJFxmiZQru5zfCxXy2HvbdesnKsdbF3MLySwNDjeNAp9e1AYjPV53",
  "key2": "4Xi9QSTpQd6DzUoYJwoQjWEFKPDSBaPUB9c2a4USYumyaZEsSjJoZ3TMns9dycGTQ5foUr9KiWtXhnN7udbg8wnR",
  "key3": "484cfSi2PkRbJkpbt1ACDpL7VuG7WHwqjJdcccQNm9z6scWuu9bqu3y5qidKitvbWoANpVTLi4zvgT3JpHdouTs5",
  "key4": "2Jsva4c7W8g8pg3mBFx9drUA1ZKW8RXRBB7vNEa2gHUvyvC2eYYxdytsTCjXi7WqcsgHRV996i7c8HR7kSZ9PJeB",
  "key5": "yorrsH7SCrA4R61QWytP9qZ1gbLSNW52K2SND3iqmnTF1xmDGjEEHCsX2YQH4dyYH6DwJ8RPBxkqdGYuFUgqHrZ",
  "key6": "5eqz8pKfd2ZjrDBbtWz3b97Bp3MJWCE1YycRHz5YqfZtsZkskyxq98gEpSPd6eccwhkzwDiM5FNLzeMY7xGoeu5L",
  "key7": "eLLEeWgW2dzJKtJ4YZiGgnqBUS7wz96Fhzgs5v93vF9ad5fGDoAWAxdCZ54oR51pAnmbUackCdW67RtJyzTDj1R",
  "key8": "5nAB3cD1Ti96wLiuhqGPjSHKtWAmBGRCkGEKu8Rs7qyUPYyWpH9JjoWJoRnAauuFz4QhHVJqdm2RS4DSiDT4DUoV",
  "key9": "2TQAzAuFJbwLLGJEUbWYNjyQudXdfWZB4GfNaSdByncUMy9wKyn6Sy84EeY8CmTU8oQufpxFgqB7WmfvWNnoFL9q",
  "key10": "2UnbwpjpggpdFcavzJTNykipCJhVjsa4165AU2HeySqewzz4cc6cP25ur6oETmCty7YvpiXho66hgAvdT5Z4EuYK",
  "key11": "cyhHGBzxAj22Sh1wE1zyqgtyU5in4zWcwk8td76yra6FkTSiWoXUzurHxkqAfCrMBDmDaN3t4BBxRnDVSuMgzPi",
  "key12": "4Nd63iqWebRo2N2no2cvWj2UuSYz7pRZpoUzQXRWkhqJ35i4j3iU6eD618Zsw8jJxDjVb59m1V2SSdm9pdYHFiZb",
  "key13": "2xkL6QNSUBxmFPZFHgAz13uSC2MJxcPEmJZCrTZDK5BvkLuCd2JzVBF175GM6pdwAn7xKCzwAX1F4jz8xC5oLjHp",
  "key14": "58wELD4exy6D13VsSwxXtH9AcKwXDDq8ZnCGSLiFQRoWMf8bHd31XrRWcaxDtUydy9USjLmsbhepGAoW1wBwu38J",
  "key15": "3MBbUbvqfaajxBKzdXxRjX4VgYo8CgKBjZyko2GdeBexnCYPxGFuNzM6r6WRFnB2e7dvdtBgW8S4AkcU46AhadMU",
  "key16": "BNj9htKDBa2mg88u38DMfA8Qgg7EU8oceRZ8fbXYfNjSrdU2mAfqUT4beepPFo3r36jSbF5ALdMgzHtFYXpEnEA",
  "key17": "2sn9Dfd1JLuKbKbbZ44f6PgX692afs2ufUEPkWx4m1pd4gqPVA3TiRWFxksZNPkBndd388HdQSyX7qvx97kYRGNh",
  "key18": "3GAFUUZfeG9muXcnb12mg8kneoMaQSdrUzp2FuwrQg1vxmL1aoLZbi5VAtFT1tE6uhAnySL7bVF98yEL3vzC3EtL",
  "key19": "3oC53KxXbTiZLbcCZrYV1C8zCAbp5i96mXxvabnjfQ1FH8UoV9qh97B7QqtbnrNWshWfbL2iHfKun7Ky2XcLJkgt",
  "key20": "4vj2rB6Shh52kPA65LpUGuAKw8RbTJciiGrSGeKsxQaAQvgwoKrYSikQsrexk9cFxpxJ55hL9kqmdQsiFeqXDuX7",
  "key21": "3WCQuzJ12xnPiayACvqQh2LD1T89Z1wF71K4n1azQLASRKFfofNnpwG4hqdW3vi4QnuGaMrdsmYxv2nDgTkRGqZn",
  "key22": "2QtU23qvhgShSvgsoSd85BMPARBgazbmyHzmwDqxcfgQYGX6jtornY3qM914Ynhfixga4ZUxkptpL5ydP8kd1n5m",
  "key23": "4c1AoSZnR3j3cX2D7XQH39VujHxP9DkWPQzbYoFGY2vShWsT82YwrVyhyrRJif78wW419BQYrGcJd1xou4eavD9C",
  "key24": "2mwd5N4DBtFKEnaPKcKhduCtNfbqZY9gepmLtUT9NiAYJBboAfSGuX8FLMKrRX73isoQxR4Z49ks9PijwbZHeJ1u",
  "key25": "3EsugQ88QzaeZtf5DGzoewRUBeP5TUiBA58573tnSp1vJC6o5sS8kM3Y9EYtLy47bmz1z9mrR39q32dQ4JrxRj3D",
  "key26": "24xoibY2jCvwBpjM4A6xan42LzieSbroRAVgbyowEH3gHwZoLbCCR7zuza7Y2M5gK4eDpnsAiRETnt7nPFA6Fx6P",
  "key27": "eyk2Xt1BwG8jxgBsQQyu52X3mtT21ESngypU5X56humyH3dVft4iNJ7uWPtrXAEXm2fhx6KoeRDsSeSCNztCocQ",
  "key28": "4yFU6m7sKuZ4TGdv367HFVaVypW6o74zTkSsFvkwKih3jZZkk48cYVPVPoZiqZH4XKkHhPbAWhB9veF4BbuiswuP"
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
