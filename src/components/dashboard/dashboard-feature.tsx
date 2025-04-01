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
    "5W8aLuDmG9kfAXy85CsdsWPauebV1ipBEs3nDEo5jvGzzcVUHo1NfzKmB3UgTYjYd56q3H92okqe59gm6Jvdcqwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmgoJomqGZweRfqsoxNUdca2UGP1wwsdb1cZcaWWRg9ho8bPgS7uZkxTF2J5ZybftUDNreNbf8He1XmyGHb4YBt",
  "key1": "5TZzUeuqQ4rWrsxo4SNgxquZvjbd6ABaxEC5gAsLNToFsQy9QwiU9kSwZPMxkuLPQ8T6Z7V1EzLqb78hjFVZ7YRu",
  "key2": "32SoUU3QrZbcZC5GLrL5e4zNQJo5CTn6bPYc86ooV4WkgdNBLhzUM6Kodb72nf63TbSpzT5aV6w8xc3PT2caP4h",
  "key3": "4PvvB6bqGtk3zT2FWWRfg6q1rfjyoHa2woUxRZzzD5qfjzhBfyggpyaqzCb69xoHcwP32xZQaebGPQhM6YRffJeT",
  "key4": "57rACxmfrDfPRK3auZzKPoK3EY3bSpNPb4yAMyX8Skarin3ZUdeYBLoqDgGrPLbLZSq9fn6G5Ug2WQP2JYM9txi3",
  "key5": "64by3RffmetfmKQsDbbGF45b9ParEYbFmDosVC533wPFbMo7XtMkcn1PBe7voKMZt9tq2ihziEhdNsi43dLPoTGo",
  "key6": "QajAsJYRWoscgEZt4PC4tDBqcz6VFtTP9hdAfFpbmYVqqQTmoM4Qu4jfbEVuVkjk9b558WNfF2YoUihdXnKWFeK",
  "key7": "3KHdjvFA63guA6dZJLmSLdB4La7aaSzG5auoXqpcD1oo8kZd8desykctubRv9sP3uwwZ2xzXsPRvSTDhMyqnZdUk",
  "key8": "4km3deVq1fddpkZUsUXpLMHqSr6E49tLASrcDoUMh9kZuxEoEBTz8cZZu5FsLs3DcqsQZ18XYLG9bgsP5kctFxKR",
  "key9": "28bUdBzKUtYRCTn2fkF4wYu9yUYF9gyrd4KJhET3VQBSa2FnPd9E9pRywswFiPUoe39YtSuRWx6JZJjyaDLeRFUz",
  "key10": "3PDBD9ZVS4ybncdb6BGFn77ux4oNp9FSqsFiDG51HiwSrxYQ5fPALyVFfvXiWCEGxuJKvwcqw82BBBr8BmQvsecf",
  "key11": "5KMaQkdxxiQRqk72F4f8gCDjxrHPuthJbEBwB4z8nDgKNbzCfpsyXVrtdxMwgypv4g7xtmdmJa8FREqRAnAiihhy",
  "key12": "4aEXtGAg6dDB8YTu7yF4DTKf6TzrnjtXRHvC76DLjPfJYBCFroBn8165mt1EFEjBM55wk5kYfQ6kwj7jycMpfVTg",
  "key13": "2pcsqNYBS5L7R2Z14TUChP8JY4P11UJMhj1c65nuXdfdeY4n1QUfMKH6A3XvyU3HQjC1uMScqjytKykgSCtzbtRL",
  "key14": "3svfNhRm1grhE5KhJ5b8tu1pDnhkPCjXVcJnTiQCddTtvQh6PnsS3UZ8MPWfHCVPFFicc1HYGAE7gpRydHrgh2EQ",
  "key15": "nXhze8E9G3r9JyyMzwZvbUqDWxncpZWFcux6SazkaAqBjxYVB9gHnj8MM4D4NqMSbcw6BPguc6Zyx1LJMhvMw2B",
  "key16": "2C12euCvRbtvMiu5DH174aXLvyzqCB6Vnpk5P4Up7sStE91ryL7oiWbgAXgKJ4o4PGTnMxM3egQggLyRMZge3ao",
  "key17": "28KkkrqJQAVr5HcNmvNbBaGQZzxZvrrdqAHqRbzMw6D4WnA5xQMnEnQT1KHvsCGtxJ2cPn2c2epcpqU1hDic68er",
  "key18": "2cihAYawmXnb36Gww57VyUbMPB7HQatVd6Q13me6wdnpRrULjxPVtoH69kkxmk7Q8PzyQeb9pzJ8TMgXs2zN3q6s",
  "key19": "UjRqR5MqotuiMDWyW2e3MKHpiMshCmsA6rusKBJatmDb8TH3xTpng7WXsGGf1662nmfGmJMrbyq2JsmhoK4wKSb",
  "key20": "2cwNjPDc9BpiaFDCVFTsWyEhrjWBWwcd8bpoew8fpd7pKo6Bg737XpHT7iwNRGJC3sv4epSBmBGX8PfbMZcnm5uT",
  "key21": "4dH8jGPsf55BGgehPsVBEUqCF1Lr86bGiaiPHEr3VRQpfPJ2v8mjtL5JuhzGCcehHxuzzJfib5wH7B58qVCQwQ7U",
  "key22": "3Y1WegrwRhc9bS1uCtUGcvJ1q43QpXQead7sWnSTSegroTENU7HUKnyYnTnYqaLB7C53fi644k4N3bmfVxwqt7MY",
  "key23": "KK6tjYaxTzVp28H6d14MBaeoWGENeR8fsTPMUVJv4eSNSfeaPASLR7NKj93vLEymugkkkKnir2RrMEHk9wX6WSG",
  "key24": "4rhmQSgu853UqSzoZtRBCgrw7APPQMhdFBxpC4FRLAYAucsfQ3yS6vEjkzzzjXGb1JTKski8ZSnisokU9aau18kK",
  "key25": "4zXUUrVEuFLiRPBBTmt985JbUgmdBUkmFYNbo7B4hmoBXbW6vo2ojERTj9h8Ses1o53z8Fbah2dMFWU5AR5STumw",
  "key26": "2VHKEMVPcqdhqQz66pcDtKJMoaSriDMrwGLB3gRdQk4BXcj3F5kGN9U4fsSNzsE3cLd5oqP2qGTJVd8ADx5z8d8r",
  "key27": "qjNvQKnsmpFdx26Zj3ZV5VmE8k7YS7vyWUKT7JqHkhZXqKK9853z7SrdCddzKbFAKwiueWK1XhYiFwrh36ZFEnH",
  "key28": "5fNakk5xGci8WPDmBaqSqnfWaHY3mj6vAYHAxd9UJ8szaCKbH2pFfmCKU1TGymoLLLo4wd7HB9ntqTX65TWKihQG",
  "key29": "2NiaMyhfN3uRa6fy6qAFr5sjBxKsDrUTEQfbrkAYQmYbYc32Bscm9zdLCSv8zJ83r9gf3oKhQZXEegDVW6jsSsC5",
  "key30": "5MHBvHGP6iGZ3qk3NXE7WBLHDNX6EPUhdNUUxHSqYQUkQjXwzmHGhb97GHCbCwVrVmnYy9L6m1FqVo79ZWcSbgTL",
  "key31": "3ZASiSnvYX3bXNzKRnNYr2UK5J4v1z7Caxi1UJoayadBV9JNKuwq5dG6sAxh7VfmF8iRtM8W8hxVduppRX6RmRUJ",
  "key32": "2oDAyJETiWWn5p31g7Et9yHMsBUHy6sFiWJQmQH8bGTPjCH2mZm5Mu9kJ9WiPyDJHFhapSZUKDVkvD5TvSSwg4er",
  "key33": "AHxG47LBpty3KbUFzZ3PA2Bjd4QR1kf7sxp1sFnCQdiLz3ywPHjjQ8s2ajzBHqhV3tH4FNAp5iUoRkCAmzAGmPK",
  "key34": "noXdciEzQerLNS2KgAMwC2r5CTcTB4wNNK95QqNKsiFbWyaGg6yqaxQXanoa71jgdUY8jA3iTPdFN8n2gjMDQVS",
  "key35": "3emjsA6KAMSYuxP1oC1LzeS6TeRSP2rzRVoMvyHEhxY3siPVntPVjd5D9TAqHJRZzAmQ4eyot25ubHNqytLkCasD",
  "key36": "4UF5B1M4V6WPqnL2Ec5Tp59aZ79z5aLJU3tjPs4gYC1aSRSJEF3FuL6xkyS3PtYKk7PR11QUxmg5oo2hrx39beiz",
  "key37": "4zQNSzzLUJuE1mCwFkr1HxbyGGavrNZ3zj5xpnSNEmTjow8ZJzYLGAZXwQhCbjs62Rnq4ZqEmQR5TGeqk9ea5mYM",
  "key38": "5es8bpF2FRYYzw6zPCPQwwy3hVioBFF3t579jA5fvJZ1S4Yv357i85LgxNVLsCnsPSr1DBZUTkHk3yjft5cnVSRs",
  "key39": "64Kq9SrtUseF4Cjt7LzeSmrGV8JCgKMGM1TBygSRdQ936Gn5iDJ7mSBHkdJrNdM99g9V94ZMtaA6cVpQXTHS3V34",
  "key40": "ewwMDnPjiGFMCtKAz8V2rgdMh25PCvqhHGn5irZe5oAmu5MZDz3pb74bfhLn2XGqi94nDREuk2XfWzdpeqry6n4",
  "key41": "2wbwcvsYGVP8DjxirBkDDFHjNDDHjZcCnvNduAFjQs4hgBnasYwf5PEe1ZSM5UwT4bBx5ATJ93SpxUkv6Vk3WDqF"
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
