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
    "q8NNX8A5zqA6RoQydWPDho3tSgR2aWm87WA25vCbtKdbkLi8iFG4DQco6ntkQ2PKkoA9o2rDxLTowXxZThyDRA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yQep9UTJrCMTMP4HpQz7HKdgvHF5DQWU3n4rvQfDdFHNnTQqnxzevpmXBabqbdcaPjt7vz9SqVgesgmWfiMrAH",
  "key1": "5udPKkq2i3nZerKfTpd4iosNC3j3oD1hfUnJ8zCDqnvNvgVjoQzt28ezr8fJUPV6xqZPGwzpPZqfGav98brnGK3p",
  "key2": "4WNoqvEq8JHE4W4PFDoaxguz4ArtmRTviGkruak8dd8BAqymWDzbwCmZeXsWz44xvFNKsq2hTXyAZNriceXrySHp",
  "key3": "EXy54iNCwXgHRoEybMw2GTPx8UFBr8NBBjVBhtiFuNofrjs7pqLfZCnSivrpsm19YhyRqhsRLUvaFrfGzXAZhsK",
  "key4": "XH348sNFu6FD3rqmD4dDeeomYkhKydWfRigZCXK3W2ePwbwYDa1cUAfgRFpWBTiHaCPVQD2iZprMgzeWYZjvJ8F",
  "key5": "47dgydNuXKFZvjyxDmwREdUxEPGRCh7BSS79wpBbX44RCJ7AzVvAxtR826YohFP8fzcY2TrcNWYKUs96amiyPPxT",
  "key6": "5bwBKt8vGwnX5yyypCJYRxRWcHbEN7SymN3AEdC2qeGqQnrdZimkcUr5RCxcktakYNJs2eeaGcDM514fCYjLeR72",
  "key7": "3kG7VnSo7sUCqQtPyCoqVB7GTmNg5TwjxqW8yh5fjBLvcyn4EnPFxtb4HsGHbyN5439qMV7uYqUWiXhWQQR5Axet",
  "key8": "4M84grojBnsX6NzHuYPPCECky9UXyp78mzfvk9LFWp1XhcgsEEMjbW5ezaSghHw9oGZkotMUXT22vomZxX8d1AtS",
  "key9": "syUvca7VmRioZdvTL25mgwhYgJ3g3WCyn5bFDQdBjyeEyXVRnuvywrEP6xvRoMZwsz8yjTpgBjd4CFQykkygjyJ",
  "key10": "LUPPJ3rqtYXXUC4sL3Pn7hcd2Hnzqgiv1QxWRYr7YmCEPfFHvtrgiCemBLTXnfcwuFrrHTHvDBKVzidWAHmWxjb",
  "key11": "5wmBhavR2K5DqyiEwfD9r2wfyDds5gwTT95rEgyDLP9sBmbgtL1vdxY44F17PMQ997DexAx62TfNdEp15C7TmoLx",
  "key12": "4LWxE9Grr6Y6dYTJkVqv8NXqkpnwosUDh3XPDaAP2gdKwvHTQvvGFhu9bGJNsAwbksWumApKM57Gdtxb3ZPiEuTU",
  "key13": "GwCVwYPZYsdZzrruD17g2DAuUA61MsL1BhPeZKyCiUzhoB8wKpkREhhkDa55ZwC8oh12dc818kpomj9eA1aqDLd",
  "key14": "278LmYaEFLezJo6PL5MkLgoZLN3Mt5hgRqrFSYYRPp5gDu12rroFKuoy3BGmUUsitPyFM3hpjcgBS7u3q5iGZVeq",
  "key15": "3UXTCPHgASjNec7JKbS9zHxWr2GpW6F8G2yUYRz1vGjHpSMeTYWKy7ATH9cs4gUNmhcVB7tW4MyDMksmcCJ4Z3rL",
  "key16": "VBmdB5rW3uqPobcaw7Wsb9sSnSU3QxPqeMV9SUMa8C9y7d1T5VxrBZcsezUupTFU2QvMmiUVUnVjNaNSg1hbM2Q",
  "key17": "4fKCAdfb2v93t2zsKuPgwpdaLF982xUKoxv2t3RDpk7ZcmKp7LUDYFGaA1s3TEwjM1gawfVbVS7QR3bRMfy2LY3K",
  "key18": "4FtrHww85GW9dTciX5Bqh31WGgQRj8rYJKSRrL46AXzcXoGFG1NNRW1jNGYG8xNyYizVNNKSp2BXRCy7ZrZTnrgk",
  "key19": "3Hy8QZcSbRx1FWyZpCjz3Q1fcMBVR3V14kr7MCRFsCxEejXEhRFEbk3fyeEwsRhCsaJVG3do6ooPdF4hL7VnH2FM",
  "key20": "42HudfoHHqqompDndiKbfBw6kbHxqjRYXutqWKkZawzw8kQNpWcbC23WeDETjxzYLxgJzyjW5b1wryzPVDtkWwC1",
  "key21": "4XZc6ruezSdq3tiwVvTFhCA4YEpP3FjW1abvTqTccSLcLheTdiCTzcY93H24ibBSueqLQPtiWM1cgjnxPXwjr1k1",
  "key22": "44xyKTZmS6x74PmzYAP3XeyFUA7v58ttQAAgHUgQrMUSQUEX2Ky984z3J7V2hWeTaL58rxG3Kh3YuKQAvd2F17a1",
  "key23": "41x87yw9FePdg27EE5iYDwcGYJroZvqxyQYZxPBQJ42GBaiMeiWVfTZmosduZK7YKUfLd3SHqTxj3vhwmztTHQio",
  "key24": "2ob3bnJUCNB6Vbn6GrPSpntu8dnCdp5F1m66Mo3EC36qPBnaJN9D9xKyJnpppHebxYQgD9gHH2mScUG1hLp9bGqH",
  "key25": "2iAB3xgJPay1KhsKZXjjUJ4Ysjd5LPiRBf6uAv7nNzndtdwMxp9jb5ya4WaPpsbLxXcp4gR1YkMXQApi75RYtH2Q",
  "key26": "5UTftU3Yv7sQZxkMfgxDrxijZ5uzQWrPcP5TDxvwr6jDSowPkXgHx8buY7i1n4KHQNTTYuhJvfPuDQ461nDnh9P6",
  "key27": "4FJDgDcwgjwP16S7GstkMinN7hR5kvFLijixW2iPhpTuwxPiedSbDsiNXBnqqQPZ1t2pWnG6s3gvfRibDmddCDD1",
  "key28": "3mhuQvTGHhH7JbcPSEP5RAAaaKh9A3PHPAsgX7smmTtuGXzWUNUGZ6L9yvYukZTM7Z9qJrKVuyPY1Eyb4HrAEohn",
  "key29": "42PwJMzPuf8p4hxt5SD7RzSr9NUDDxwTgTG7hidLwQaMC33i9zz1A8FfhSTaVcyaWHAUZRdDxAPoaxEnD4jqK34U",
  "key30": "4Q2b5FyqoLmGaD4P318FxcdFCfQHFJZ3zKhRv7uQPPsDCzSEyEzmEYvqKAkh5omxJ7KY32DW86ua9hXysawBxLWp",
  "key31": "2NZRjnhGrxYPyehLyT1xsCLYDB5z2FSVZ742672Vh6VEgEZa7AywvQ6Tgsj8JhprMZ2d5cNWrv881dpQyK7QvvoS",
  "key32": "524MNxtMydHxwoiFGcUs1n5CGRN9bmr5EPbi6HtGPYALM44UVWCsSSZxapPchgtMDqc5N68CcbifYiaDPPchvPAN",
  "key33": "36Wdxm3Sndx1hWgZ1u6mx9usk6XymXs7Y1xNQwC22AL4W69kKpEr528YoL8f42i6sXMAVzqkVXd6nkBCLbugHeYR",
  "key34": "3hcXcMs6u4ndeq6jEkx98CtrBPwMp2N4Kn1GUcjvbhDeNpJ1Roo7sEaNxGknu8cH1s4nG7J4nNvH75ejZKLufZQd",
  "key35": "5DVt1H7AtJLkVseWPYBgSCb7tAZiMRdmFBgJKfKmpRXJVTBP61T5v3JP38GfTaf4o4ijsavHK2EvrgBG4NG7q3mn"
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
