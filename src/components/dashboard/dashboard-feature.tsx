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
    "3Y8WUkACpxUyXdKeeEmTR5m7GrM4AyLgeNTYrcLgYDZCfFyMnx3KqmATCaJ6MaGK5jehBpPt1M9v7GCR21GW7ohd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KUSzFtmSBRTsQneyQpfEyEQcZ1JYbkC9RipjjEqrbRGjBArjwy8X23jZjpg1tC6re5fMJ3ihZvJZjtmgwjudxXS",
  "key1": "3gvCefq8yan9LJuRmU74vQoYhDnxv7phK3mDHm7seCH5uCKihtZBY2W14xzQ34bjYiSFFJKPsnTX7rSG1oD3UhEF",
  "key2": "5ARhbAGvQwzFB3WeooKa6DHnBLy9gj7tR6eRkUqYnJNRz4Qe8EP54vgrTfSDEULZb4bSaxNgHXRx6VzDKbx4Bttt",
  "key3": "2M2nusQWufAaBrorE3uW5jx4b5bdHq8gv7TbpGL5wm7WqNZKd1UgfGfkzjasXVTvFsgyfy7DwRhDkiAfcNH2KqKk",
  "key4": "4FdGY9dKtcLkfiuCan7E6ZzwtAzC9jGy7XhyBSUFRXukohK3RmsCVQxug9ERtoatqPC3HNZTM3PRYBWqEw3UPCSi",
  "key5": "5BQjHhi4DT8wCgpCHPWSXDn8RgPUXN2WsiwYDPUUSRmZRvKfETbwbyJ6hKMWqD3iPGHvJ5sGmkcy32X3qLiyKC8X",
  "key6": "61QaHRV5fnFp3u3hTd8FXMT18J6as5FAxyLM6PTxQUQzeae9xF2Hn5SDPUH1MHhGihXBatH5L9rjL8kDs8c1C9VH",
  "key7": "XdMoEPyY4Uc49JamxiBzifSJ29igNSZvQxZcrXfGm7AynpnfCtpCk313gyGs1uxTaCeiK4t9RVtbopDPb6yP2c1",
  "key8": "4oNQNB6D6RMZMNHUuAE1hhX4WWJsKSB6ZM4GtTrQkTbuaUHGTyM2Wd5xhTPpAcCmgzTZNca6oNRPv1Zw3YpD2Jc9",
  "key9": "WuPoFZcdCkcdNVhpwLoUtTG7tPYqRrbx5nd8CYqEreC2eoiRVHABGQwFq6HY5exy2kuxZ7Rngu4seu8kHEnopAL",
  "key10": "32qZdzgrrVLSUXtuBo2vZnvd4NpGUmaYxHfXPqU72hxVeaTA7EzhrDisepHTEFL8JntzYShyd17VE9WGHuoQCD9N",
  "key11": "3KyjmS3ua4BaSZ8u4HMXTXqd8SzmG1p6bbWWso58C4b2ngWe9fZoe5noHrztoxQphQTNLuhcQDstqm7ho58hqDZu",
  "key12": "62KY1Cr3gCkZCUDAQHwxzYJjwPra8WAFvsSYWc9G8iLqts6KrkMmiW1EpMcE4vMDi2bb1g1W8c1mCd5gCqAybYjh",
  "key13": "5RvaYqDcjFFjhsg6CbbfnWviag3ja8ApJXzyvcVVSmyjmWAo8PS3dTq9oPo2h83CupgC9AyqzvVR5PP3URbdb6oH",
  "key14": "3Qm8Fp5q5vj7atyCc12qnXKQjRnmap2emigxpxBifYBToBf6yFNDznUnhEGKVoVBnDTDdaaBR9QfceRMZnjyiiVW",
  "key15": "4jxFdfh4s33AjrzHQKwK1m5juDZq4tmzmgJKBuUi3HXtfbDAjkaWw3eQKJSCSBUiJZzc35owVN5WekUKTcoqUgfD",
  "key16": "321dmPgEZFuF8m9Y3sHQ51PUGFsLpsdzKj7pnjmNrALncjrT3WASVvDhuxiW7JpN2mMyp1ZTLowHj9MPNtakcUmV",
  "key17": "3szpciYBsm4p7xdUktT2XMmNFV5aWLT81BvQTKhxeiYYboqWNaxEwSFtRw6Suw4cYzbAFnGD8FnifeUY2z4ZSj57",
  "key18": "3H6M4hKs4w9U9qhQdfJWGte3AWUdmToC9mZU7ufZbJ8B1qXWKzNb22TjAfD3dzn8noWxM4iFGB2sMDhgY59oBcUw",
  "key19": "3pLVaGhrfrXDYuERG6t7zpP4YhT1H8NvLENqACmDNdmsYhKNNEWi3deuu3cecEgoWsaoWTH1zrHdhRUHutp6wc54",
  "key20": "4vFrB9eV5vFzkG1HHpp1Zv76RM23LE5nqRUZEnKG4XC5TF6dC398JcVoboe5zzzKtd3eZL2XrW8R1XPVbojfRbqu",
  "key21": "5YkzQcxgLwgGRj8Ro51ED7yNGCoqukcsUy1yieuJUknhM3KMgLmq8YJPx7JskA3x71bEu5AC3C8Gr9kSPALghTRN",
  "key22": "4orXW88a2WkrHGrXkG6dkXU5ffLmoxUJsaQeAZmxaBFpBo8TGu5tAKhd8wwqzfgtBvG436Bp14jPqkgLgt69WdqZ",
  "key23": "25w9incb7RSdS71tgZeRgZs8Mh9HvMreM4u1fRL6nDxQcfbv5NCCrMuwiXyPSA6X7Hk1R8THZsX2S88F7iVYPEgn",
  "key24": "3btsBMtWnPEJH45r3uz8Macnf87pj8PmnJSaRPPQbhQszcMAEq2y4htXbEt8tzrhtDE63eqtaCZgyvhRKZFQD2ih",
  "key25": "49crvsCXjASvt8bgHzeWkdKSnPZQzELUdk5wY9Cqeo3n6d4GKQJKsTwbnd3MPNyYn7LMvQJBqihUrAL2nzCizqeY",
  "key26": "2Dw3AfDALi7SL93fmTD8WbxMHWjV8i4sUcXhUPCh9NrwAMGFM1HKQQAXvG7SCm6HFhZM2CQQNrpDyKSt1w7y1Dow",
  "key27": "3BML5DgKys2tQtgCqj4cuvYYxzLmEFcGJBoiUxvFHKCL8zE5vYesyWRqoGf4vhnB6naA3v9tHEFQX2jdU93VuEHD",
  "key28": "58sQHNLvbYVFNKVMa4PWS1E3vFXBMsa6bG59EeoqcFyBZ7Ci29xnf2iVP1zGZkGMysScNhf7FMuaMqD6Q3qRDTCF"
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
