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
    "4XVaB39kjnDoCqbeBY3yAGozuqEzwpm3L7L5aLBHbBvUpFKSxaKsvvbXUKY1FXxy5P7xeVyeBde9hCcQzepxjokQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51eZGs5vnT7ZTNMirj2vK1e5NKaDeNKKRWdBEHMkxBYpDX7vB92P7m8fmQb9t2sUPzGwLQXxyLJc4xUSxbwsna5B",
  "key1": "3sRnK6iT8Fd6qki7k1CWzvYWJHbiMjSBZSa1FadrtvWB1hwArnjJkSE46rmrYF5WNZHuPw5QTkZ2ioqvgSfqHWyc",
  "key2": "ny2yAJe3xi5WtCo3X4Ka8SK3ajQf9zpwG9PDhKBLq1tKNjAkYnQZAdnTaq3pSH48EXMxGA3Jsn3vKvzvxLcJaWq",
  "key3": "rRWM5UvHtCmo4qV6GbY7DzwYXQnatqUxySLX34fCvAGf7ZPRmr7vbz9ouHYApPNy6cnm3B5gPWdXBnTsnsQguam",
  "key4": "3zbijTPJVKsfLwy6a1XtqbRgPh4Vf6m5uyoC73DASy3LnC3kDrL6Z51H1zarYUGqyRWt1CErDhGiqbK8coUSGRtJ",
  "key5": "qe8K8aDCsEzhCyMy8RgE8CKjcEr55MeFSXEP5L9yQC1ZejNo5sbE1z5KcsDSz5kxjgmoUaB83UAEY7kHpmn7fwf",
  "key6": "2PiK7mgoq1HVtNufvgGDtAMBKhp48zrdodZJWp88K64wZ4BigQ7i6pthSeJvt7UxeHEAdZB2VKqsAC4ki9xqv5bD",
  "key7": "53BLAhzfdTQKt4cSe3tKrxV6socpSbEu7ZvUHrtQJ3PwD42THEXqWCmuYyaHmQu95Qd55ndzVLKr4Ks7KCye5uLX",
  "key8": "2auogtQeSjK8kMCj2DLGHEBpQ9Hk75HnZVwNusSWeJQePRtACEUHfyNc5Ggzj2AvEx9ri2gy3UMwySjK1s7CtbZU",
  "key9": "578RPFc2LWP6aS153M52qspE8EL6SmNWaG7R3kXjUMiumsUKuQTahFG9Rev943RSehJvfkJeDjVKbaSiR89Yv7Vu",
  "key10": "586FGMZkTiqX9xU883NSADxff6K3geLVZezoQJYuyEyy874PXtteTEzcfEL1X3gLqM4kEBDwWuUJHapDouAFJac2",
  "key11": "2GWrLgAXq9ieWRAwMV36mTXZyv8xwDxhu7wQZG2TDAUeTzp35ugcMtJw2knfJFBWZHhujQBZdgnHf5WnoTqqFTHY",
  "key12": "2eT2wJMnqToeAX3QqAdL5DiAkxYp2reBiXonzFotuCe9Nruk9MCVBjjcs9ZPMHRgBQEX8JPwbyFPxpMJuRif6cp4",
  "key13": "5pG1kjRfvEytKBVkMrQZm3czfDznh9f3XpNPTwRgQb4y1p5mynPNp2b9yesjaD4VFFV8ayBB4f2ze7Jc2G87vepC",
  "key14": "3wZsRW4jFNRKMZX6nkKqPT1WUC5Jbd6r7ZeJ2WoSodv4CwVV3h8bt6Zs7j87nnAZ7SH6nK2rUaJG1A2zBuKJFdCm",
  "key15": "5f7oAxydp83vRiST86vDCu3Jg7UMcjDGryuNV31p5AVT42qXNrrUjhCvtkZd2KoBm22V5y9fmFHTfzuRi4Wy9kn6",
  "key16": "2zTRuHLoVbbLRYmWGoSrAXpXYEwcRsA13eyprPJcWEknp8TZf9NhrETq98bEsD4HZZ7q2X36jPEq3Ym7JZkhvN7o",
  "key17": "2FkdXZ4CEaYSkrzYm2cJds7jVR8LztB3biQ4fvjrXBLTvf1FZvS8uU4czoAeWw5SGgwZiEBJnN92pihj5jK6Rbmv",
  "key18": "4xrojfMHYmNBho3S9PHsRaL42uo7QDSmBXrWhoLBHpdmkwXoVpdiXbKYi18AS5hY9QCScnpxnDS2skNe6snVBhxv",
  "key19": "Qr22URnMdujSFgCPSrW9kqg3RwAfuyDrmfQ9iqXU5SxR9u5zx4UsS2rHnKYL3gQgS2xybgFALCc9wZxsZdYJ2F8",
  "key20": "5j6BiZS62cDbmXCkNEXJG2LQAmjVu8zFo5DzsE9vnDPpgYyBeiHPDMrsKD4XK9wZaJ6pNRoTNeAGxPA3JnJmnyDq",
  "key21": "3aEZVGn2cjHb7eYfdM3ouTkjmuKELZuFqdCc4j19dAdhjCQeRGsiChA93kkTNTZUZ9KdZjCkEYPSfNY6KRVBVkq1",
  "key22": "3wC6CbrCGRWRDM6g7KCAm3UiKr5T3NsHG823PAzfcGvNpBZHRzScDYob59PLsDGERcqnUwcP9DM9Vhfamtgr5Dsd",
  "key23": "3XEVGaVN3WiR5hgdikuoeAm6p1QDpHFxBWv54s8jzWHqNinwugqfSs4XqGe7fmNZ1MuQnAwTw6NXoY18HAXGY3Fz",
  "key24": "521Koup2xSdZBeVc6y1Db2R6bg52vcSYnzQu3cjG7MRqcmafG5GZB6dHm265NcN53ouMD3vKrFY6GAW8m4Z2xdft",
  "key25": "2icuZ2Xs4W7zRWfLhQCBuzCFZNe5zGBqco9z6BEAmpfV8yuh3eo57iVGxvrgbEjkfVmk45rihCPLESum9umBxCkU",
  "key26": "3zY56JsQQ7x6qo2QLetVt3oL51C8mTuNGpBV3KXsUK2AQLqZPSXCAb2K7R7PjrTLUAczaZQQEnroZL9vv8PnG11q",
  "key27": "4so1oMPng7C4Pi4RK4ce1y3LZrTVYUE9kxfhZzjNv2StJL6TVWUZ6HW2zkFH2gMrs2VQbFYJXLHRnqr5zJucGEeW",
  "key28": "4SzsuBujqGkbHTNToLLs4XS4hXe3gJXd6uNGsBswjaCpXMXgpLMEM14fr7Atnts7XwDP7NV9GigBL5LytTpoHivP",
  "key29": "4jh8jN1EwfAKSNXBonqh5mfwFQyZzS3pEarEJajHbyEfLRwNtMmnSpfn8xmLasBRqErZWtWFwsMVZ36c4wjnGBAs",
  "key30": "4k2tiouY71DQTih29eErYQ6GVjnUAEeWeHitaoo4j7zDCYCXEpcW7VhRZWymWSCGd511UKX2UMw25CfXh3B7pa4t",
  "key31": "2ogAQhfM9X8jTNXrafBSK5cDP78WzcyJmVTfqAgEFay9jc6VsU2DpUswrHGVB3B3MguRkM52VCzJeGepeB9pB2Ru",
  "key32": "5cdmHX49bjbKoT41pz8k11fT5UC9qVrnHQJnUAddxYM5vfHwJQd7z5qPBS6g45uZ9Pkimvx8X9EAcrUdCcV1fY1s",
  "key33": "do9txxH9asr8u3CBF2eH76ni3TAa5JVhpJjuBWMWBfcm1DhzWSz9GGv3LsWWQcit571XcaLtZWCq2C1Uhdcrmxk",
  "key34": "4qtR9Qeo9yB1skcBLvQh8mcLzyMwQ34XR1mUcC2sWok5RiDzSnftoQ2T777F8r4fSf2vFVHMpmyhmxWAEDcDVGw9"
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
