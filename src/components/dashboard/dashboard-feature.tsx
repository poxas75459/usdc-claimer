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
    "247JXFLTEdLkpmp3FJF9L1ntuon4tvaGeD68spHJu5ee6U7qNMfqV9276vsegK1QJRwjheQsQBwTWQFxSBo8jSA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLxqDdvozoLjiszXhotnojnDQEwQZ18CPZW3YudezJWNyWnwS4T9ARgmNqzZSRNkt5Q6ui4Xsgq3gjxf8rYKQSf",
  "key1": "epjXfom1tck6JnnBZGQ5jqZLgRRT7b2q5TLK5HGQA2A75pQRhir8x1YKkncSuzJhAEFovPztDfFeTTNfM35WdSm",
  "key2": "2dFXUqRfAJB4btksQYS8B37R99a6i7EpYufWWhJf3HvczVtYpSrCZEUz1kKFrVXHmsqfRraXQc4C4fGqQvF66JSQ",
  "key3": "3mq2K35xsV2k3U8ZMgJERTteoN49qnog2mDsYq5KuivcVfuWMmsUpK9DFr4x9R4tDpR6Kacn5ZPLygTeDapxRrFv",
  "key4": "2Gc9ukeFk2rjrbSLtzhWVBAXiHWXrNjYb3SnT7bBdwQKWWPZGq6xnzgqeeZkBSnTrzR1SLiVZ6bRSdAzECzRMR1M",
  "key5": "23A4JEoxmZBfcbeMpgZRtQzSSRiFXAvfyi838Ae8oYfoLnpShaVcZTWDKyQdB6NMJMV7DjxVQ83tArNCxiv5e4aQ",
  "key6": "2sHSsKR2NRXmr7FXXiBr5y1svBKna9BPkwXCf5Bkbi1GiF4c7HiRS8ka8Vu9xRDRw11t9XM4EjxaY1vF5ZqXYdWV",
  "key7": "2vSPtrkyxDJkJCMNpBzztjSbpheQeG82i5WDVBjmyMVMfWVTYKPmkfs5hjdszpcTQTHjg9o2ugfsNHN7uZfZShHQ",
  "key8": "4jv4yoiHh8TkUpFamLP82rR33V6gqQUHnKBSLeA7efj2GqHuodyb95wmRyYfXH2ksLBkNq8WUBGXWzNX7izyGpnx",
  "key9": "3JWtzE2FMXWMXE2NmEm2e25CUrEQXRKChkEQM8ew2BxpvDk5x7hQqJLguLB11HW8whBVpm6upDt9F9h78i9W7e9e",
  "key10": "3kTYUkVw9C5okvkCQDzungFg2Xwctq7apGWXivZMMMN9n3vmyk6yyZwEpnaXnh6dfV39dxjZgDHbkrZQmoC65MAr",
  "key11": "52ds9RxAn2mV422bbr5akZEgM8aYgeBFy4a6AcgEZCYavYCV9AFeRwecjokT6dGuY1HfLSEQvK3mGZWXih3penWt",
  "key12": "5GsbNPhEqdUKCQsfc2TB83Hh27Ba2fi3h6aVw5bXxksfCrPD7zWsoK1bBSLuzSCgwS2AqSUqzgYfrwV74tWwU64p",
  "key13": "66fnzfowYvU8BczDZprfGKcED2KQBcusjaHxLRsTx2PosdhXgqoz2HXpsdw66JaEwXosvYDp5SD9FgyuFw8JwBAu",
  "key14": "nSjvRFZ72w4kMCv1VzEKLorXRUmyQ8byW6bS17YtmS7BzxLGR1EAVSDhEDXxSxYh76PSiCryhStzvL3FUAkfbpa",
  "key15": "4h7URGQ1CaX3CyD3pMpECEiaYvLAR4SN3PtcgYFP9sVTRTpu7vyCRoJLS9hr5Nqfj7MsLo3nYBGjLuKc7DgujNUC",
  "key16": "3H5jyFqQFcqPaATr9rq1CGKw47TbRDoztHfmK2ji45HZjSamjZww9xJpCXPvquTvFTxmXKid2UrKJ9HxiKaXavV3",
  "key17": "5GjXHauYPkL8gfAhCQgzWtHwfdRkyacthF1mTmYdirs3yx6hh5LndeBafC9dBr3PbjUJfXfpQuudu8eY6UPF9JY7",
  "key18": "3d9ark8Z5qRoeQTJKUzmQdCmSBbJN45Nv94Z6xCMDZ83bUx67MfTxw8g8k9MeXcZ8tTpwL3rJFooQhpQNp3odHGd",
  "key19": "Pi2WwbyjySB6JBbi3SCPBiTgGW9fEGzCLy61qP86wXmps8doxTiy7in6dcb3E9LgZJkEcXwEAaroYWXtt3HsdvM",
  "key20": "3UJDbFNpXCWW4kqEUMNP7p5Bp36wcrh9Wt4vSzSeLfbcmaCjGR7Cmhsff7GxHEfH2ro1z1kX3RTtczgEYYmqCsZD",
  "key21": "3Jb6jwJeE4VsUki9s2i1R83LP6WL6r65nJVxNpL6odCd8ct4zwPU8RgvFXJZTCTGVKSumwFMDm3QfFTTX2UEzBss",
  "key22": "4WiExYvaBdjNyGDQGeuaogGRfvMPXWTts2UYbVNNGQwD7r1eED3V2a9ambcoz4sxXCGtj2XopDeVKwFz9oB8QGNJ",
  "key23": "3F4Ya413vQrncQo4SNAAPDL51pwWtdgxGDpkak2zSWiTYNjYbuCkmkEZUxhGqeg3RDM6GmzBGE39KsjUKm4FPBoV",
  "key24": "3mnqLMNcwmwPeM2ggh41FghTNZ5ZygwzZ9e4Jg2M2JkDy8RCzy6GmEXoU6K7fm1t2xhJfgfjvyk4gGEWRDNMoGkb",
  "key25": "5UKRyyTVfAXvy7A1zaSmqTn89oDL6xL7nv84EFCoFeqq2FfLfcCsJaXXn51SvEzra4PcLhVDkXdx7DtSx7DkvCz9",
  "key26": "2r64Bj3oPLLqHccMaEC94S73UMQ8XS7gC9t99QFKcMVJ3ZnB3FFp1PXpsxas2RxLKcggSJLMzNSgLj7WVAarqi8F",
  "key27": "1P4yg6GDrNU7rgzsQ24YYEcTddKAxHpzKh3svJS4Wxibvx2uMre7JmarDY11GrkpKy6Hvrdv5TRHvcnDNLJ8BkR",
  "key28": "5Hp8ZX8ZJZ7cKTy6SUfKA6r8PTjHvxLXrKwgyXW3p4stnyUBxHRM7rWNC1JCiAXqdPUszvTZ57n3ofm8izQtH8N2",
  "key29": "VPrT2LuBm8ecLsRgWRsCyn5UzxCzfRKCci67KdUckmjnoNBdimL35Bgpgp7awYCqMjGdtPkzh3T1eEfZs8XA8B6"
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
