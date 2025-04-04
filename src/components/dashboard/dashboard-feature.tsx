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
    "3bbRjQL5wnbTdDP37dQnkMU3ck3UyNznUMrZJeE583n8JPEKhbLsNYpwdWFDv9GTSZGZFmXZuTUNZ4WsENrQAVJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpWWRkUaNTQDgBaFnmXjWxkWt45fooKnbXF4AgiiZ6X7A9zBERDCSXP99ggKjWHJxtkyahXVguanTSpr1Sk4zHV",
  "key1": "gEVVcRqFa7e8kGw6DF4oXnbjppctXJpUYV7YxP7Sn1o5ELRyC3MFWfG74vggH8HFa6xTVmxLRFzTg8RdNnfUVkQ",
  "key2": "3RpSRG8Yxvp8Ctq8viMCnk9eGn3uYszyhXEpfGHGwUfSk5H8TBoP3GfXCzW7y663y42LAKPPCMUJY1JsFpNMuqyk",
  "key3": "4uc8QdvhnoqCzRfZX5xkPfaNFMSymSjBdEzmrUmxxbpspeEo5AgTkYveQchQqwWP2nNUwBLVTCYSHvWAXTxrrSic",
  "key4": "5SD4R2EHyj8HUEeA4R63eGmdXyWMEcq2q9gWhTagdsAZyxpj1oQbBhhcgFR97bgu3ZsxCdCa14kYby7i2DZUBka1",
  "key5": "72jKbi6FPYU2Bi9Gof6LmpAHKCytb5fesh28qDMb8o2MciDTZcM85BARVbGwb6h8NwB1TfGUuRr5ff2d2qnWEGe",
  "key6": "4e1T9UJoeM6m25ZpB52MVonKfGdBZXcjT688c7RmFJjJVrRoR9k8NSctzZZszW55JRAMdGHFAXKskxeDGRsuZgJ3",
  "key7": "5WukLaXZVqgUA435HzXypNhHEwa4vjb55NJQMWxYTGkyxcjiaEMJDDJ6m48a8DZRvo5WUrEGLvHrEdCnKcFYv9X6",
  "key8": "5i2CjVSWX1CKdtJs1F4ZCB8rXgru1wgVrzpBziAJdiJrtCPs8ijkvfK2e4ccjpWkvyHefpioYV1QXyQDV65WDq4h",
  "key9": "4nbAe7ogoLeMLqe6cwnSdxb3s21HG5ZxCWjy3xd1ZDz9TSPL5JTHocLqMuz3M7LWGHuC2JKpZjTrQ2T22JVLxiNE",
  "key10": "592fgwvpzVU9PuV3ZGNNuHW8fgGuCZqaT6WQaAvks7n2xje5ZbfwQgwqZCPxbb5gMGcs521iWUettE4vtupgAmWP",
  "key11": "3NgEJxvYU8TDWSC7th8uctXZrgg3PnhDevc3tZjc4yQxjTDMHE15CedAZVKHWxguT3dUH34UVBTgf89zvyK2FAJy",
  "key12": "3JyAvupu7yW5qBCruoeRDx7De3kmQ4dc3Exkmv9TDyx9pPoMeQdGbJpanWPSi8Mtn9ZbR8RiLaS1Bs5PSq3Hq5Ln",
  "key13": "3MrnNKov3AYwicGfrBCSJEUrDmoTduwCjM1jbxoPiVrNQe7DzVfsgdhwCjyDnCdUCmtuc5k8dRoDRJBb4EGWeRzM",
  "key14": "4jCrtNp7kNn6HLymjFgxwWnvaABZjDuCLmvGHUHU1yVjBTUK7vArdamz3LbD6z9JYouQ3i25Cr3KmFueXApRSLPs",
  "key15": "3XJQKxj2fZMiiUWNn14Kg3cJVqoCXaKqtNKWK7mTqXHJQAWs5doN9v98VSRCxzRn3xBPuN3Bs4uuRnczMqPgFjck",
  "key16": "qKidefvLpgjeiXe5eP2YznMmDcAXfeuRc4bAyuLwcz7DcWKNXrQBDChzb6Q2745AWeaFzrLgkbmEBtqNyQLfiJj",
  "key17": "235itAqz2mthZoRqAQ48HUhA1AnTduRG3xS5ZeroM73bpmDBsBorffb7EidRJ12u9q1ha4ztRbdtL5ELw2wTuvn9",
  "key18": "4HmCCP3vpdNLFjoPKbVp9SmSag9BxTqtPRXV9azUgbB1rT5ArrVr3fEJTt68tmWB6Zd5SvRGoyURh6WABaRxGoum",
  "key19": "RGJhHoQxC8xhpYjy7JLWCCuqhmejj1jWEfBynVqS12iYbsDKuGdJv9TPWGbbC41HQ4ZBkTDTxmFCkBADCsapy8s",
  "key20": "4ScEdorFLFGiq2ohfFBMZLi4gLXCmokhre6dfMZS2MEMma5oxYoY515dy27ywi8ZmweLKtJiCgUeDkqhMCVMzgzg",
  "key21": "9pNvuL1QGzToefyHa4ygoNn7wnRV6UiKqXES6xWB9P7EA29G7fktJjVjXTdWtMvmaHuuvhCtGb9kWh1YVrdYbpD",
  "key22": "5MtXiw43owXoz4kFGcRNUAGCyJmiw3y7HYwcaeyDr8SMAKkJ3BNBkeEeArp94sGa4QfDyRGoyVHZ8ytxxbwFCgFM",
  "key23": "3gw5VQnhSVZ7EDiHjueGssUmnNq6JXBvTerSBraZ59BhQ7QF1MSNngGwox7qmop4Mo4oVFNQdMo8jdTHkD48SvRs",
  "key24": "5bYfLAF1xmavuwQpPNH24H2iCCW4CEyYCn3HeqszLrDioUJxvWhp2R1DRmsgnT3q1r2utH9f7oCXK3tefb4HYfhM",
  "key25": "fR6e9ysML7HGydD2bfyKYcri9eoA1wRpr3CYQUMcc7NykGFGp96nG1CUWWcHGjqPkAYSmeFBA26kNfScvPa78jz",
  "key26": "4W332bSsk5ALLGUXwnMFgzKk4zKkcm2dgQDqf6NtrExdXKSrsUwDMdNQvXBsAkLm35qborZyGBde1RQWT6gWhdHr",
  "key27": "2RRQeq8pwCb6Mj7qbuW9cDpzCbPxNGtgXYTthtGvyPFxnDYgttxQCfGa1QSqd33U65hcmvzHLG6wkjDsi94n7H2C",
  "key28": "5NKDgSnv1SJt2aZFfiUCKBfZ5WELDNjczTzuWuP6Qis2kMnWM24xYbuzs5ZDkC8rrnKd6deAGTNbMGunUX9gvo1z",
  "key29": "5PPscC1BebYz1gxe7mFf5AqmXYLm2pmi74DzhQGNv6Cn32tRkNEuuuHeibTA8dmTNWL1SbC1zNK5DcfwYrex3M8g",
  "key30": "GcPxC28FeaUoDViJ4nPSfpcGMZrqeZjDjDmA77bPnq35JGLQ6qUCJYin9rr6DZY8MFTmhvoYMEFAyn6TZQ53Uf2",
  "key31": "617QARBq8EJVzzbTMVAbv8PhxVTbH5j5hY5v3T8sc3PKspBq1dvVAMRaML1yzaNz3raFKiJt8tB4zUUTm1oQP6Pm",
  "key32": "5B6XQ2P7m5tpzFcTorZyQBh95cLWSSj98BkaYHb73zN9wT5EK7mLWooWUvhWusNGEjdxmb2sNeFaTr1F9s2XCgvc"
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
