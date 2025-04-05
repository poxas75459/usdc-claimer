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
    "2PoEH8yWbe23RTA2cHTfee3gu2k2NGaRp9ZuXke79F5Bs7kPQ62w2gxxoZCbRYMrwA3Y3HdUVFh595zoB5Xonz5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGAwzPPuZvLE3rxcYZZVX7cxikjH2sTX2FD4H2pdWPznk2QCeMmy3v3GYSaxV4A47bzgV4YA1cWr2zqPTy5Kjes",
  "key1": "5MeNfU18ju96ePQwEj4GEyt6aKrH7B8vyvASWHizz4L6VApztMMf5NfbG8zdgibStBG9njBKdp6EPHZw9YcXMoJX",
  "key2": "2n2nwrxQbnZNjKUsR6xqAyeaY6e4KRQa4J4z2acPNvDh52RD39e9HtfthxBYKtxkgfnJxpCvq7sCNnHVT6g997Pm",
  "key3": "56Z1WibB97ZAbyd3vYsFb6kt414XBSXBQ2KSiZAe3H7w3dsN79ZRW7sXfABx1JxpNSkAj8LUC5TEurQxPCUkdbam",
  "key4": "5BVDaRRNqMWCBPhwdJEadNLzCjitFQRkjuDAwERicPX9fBNkXaoebDCyUYsdkCcutFSUr5pQWzxMaT3CipGoyjCY",
  "key5": "659SRxG8iyEmffwu89AZNXaayY7v2Dn4wRXoJGtMuWBfHbx3ThXkx3Mn3LQJ2rpg6BMGHFT2haAVsLcNLaX8npfd",
  "key6": "27Z6wbSkSpSJpGyVbWgNpyetq6X3qcPq6pcsQjb2SajaYqdeodXjmvrMFgTvjmp5FcQDcS6AK5Q6dgUMQvcW58gz",
  "key7": "5M4qHkhA33MovRK4guqdBjFERpajE5Hq2Bnhc6YyNbQ3Z6E7EXpsZfP7veHwmrbxRKPZ7F867Zf6LcDqUwKfkNtV",
  "key8": "3mNXEWBF8mW83USDSMshhXzbf3spw44nJvYJkoBHxtd6VFn41m2vfCrLvomztDw9JdwsZbogCtrbhYuVMhdVgohq",
  "key9": "5HgqyCSscww93m5UzPQjrpnEWQW23hRhpmDd5XWXS2ykGVjEbVN45khQbSk5Vh4i4x9F8y99MtdN8GPiDswBJxQ",
  "key10": "5xK4UyjGJ59VRptztmyLtjFAjBQXYiMmSEXb9h45Dx8TKghmA63fdsrZZhrYqqwei1P6SqFrpV26S6Sq9RejLUJj",
  "key11": "3F2Sv4TTwxaSVDz8Ev2CRbRHp755Vk9vxat584Xo7LgjjDpvJomXF1KPGAbe8oiyjx51DsXpyuGV8ZLccmmCqZZ1",
  "key12": "3bdJAi1XUjhRL532eQnHKhr2qbG8U6gtgA3BoyETuKWeMLYPAKnPxuCfhUi1XWMqHeThXEofShAZiXPMgai8YUHW",
  "key13": "2LzQ9WrVeqdHjirHwapAnJbfNvUG47sFkEEZVBtycMX8EjZtS6TBizZS1CftRak4fboDD4yaV1AJJFH8Pdr4XeGq",
  "key14": "3KeMVv7vs75e9pjykmcSP5i9GcdEkyrUnyWfcCbzpWssLpSg3grEs2LwTVD8ey8XUoGCEPronCVNyLuZ3SpWTPwg",
  "key15": "5FPM6jVugYGmmN4Snu3aPYxAXHkVB3gpH99exxZijD2EvZPu9FdQC4m44nAn5i9zKYrLUFQx2LDrJkrD64NA8xtM",
  "key16": "5S5qmctXrdybmQAQhYB1WWoqRuNu24vbEf5MRUiF1PicAYnx3VTT6jZ4uJGV7fsa1zXUC7ov8j1wSzL5nFu8A9JT",
  "key17": "KgEWoQohoAkreqekFePQxRL714EzcGQR5dw23LBH5BD4HYguMSCWua39eR2oPWtyhN5abE9YkZS1qeGrwpQfiRU",
  "key18": "2bp9zQkqdSpRow1ArXRiPtJW4JzUBmmizxVdtZR65PQre97p6MyrwnF3vFUcoYeNK7XuayyLWSN8PT5KKZiBvcUb",
  "key19": "5ozHkKJrhaN4Sm7j9erqUTvJsnd5KnhLjNE9ZTvLA158LQ6vQBxHkVfXM8j83X2oL7SfbFvnnvG1uQbGrtwz9gYa",
  "key20": "66gPM5X1bYFXnheNawXLquYs9FSgYgW4EWLD2TESbiWnfddmfvfvvnoKjRxksaZsC7hGzfbyifPq8PbRSkVFtaQ5",
  "key21": "4j9W4eEPhJ2tHFMjrdhAHJpnVev3tspUbuu3TLVDEhEiukXTp366EbB32kbzrGQQSptrSddmkypPYXk4duVrbRbt",
  "key22": "3uVsLQzE5qTYMCvsKDnyNPnihXdwa1ZWWGSShbFe3YqtrLCBb6hqYUEsv7cEMQdpVVzDPM7MUcSNYLXR6KMMcKr9",
  "key23": "mht487SdKf3LFqf2BAMpvPga2HjkHci1fzCgxpeoaHzo166RFzYGQV4pqgYGzNd4X2zsVkZEtRjioQAokvcxTAu",
  "key24": "38ZhgyqyzBiXt1VLSe68mHX6FPXVHuBFhJ6ASs5pu1yFezMwBTY2jmcJ6A2n58x6hEHJ32LSmpa91REh3hcKUpsG",
  "key25": "3nJs5soxHb93wpLWM6phbxsU2i5EHHgphfuWxNGXFAsURw8ETrWAssXZcG9GAVZScwn8PNYoeQEePiMQ6sVWKh6",
  "key26": "4Br8x4xn9N4nNHAfp4rR7JmXKnnpak38MRQLYFM8xaxLANUpMs58hZaDxWtB4AiJxZPHk5Hwu4gQCzvSduBs9HpU",
  "key27": "vCKiFbc6avzUd8qU7rRNhhqTS1daRfsmKjhsvgpsDaoaijsBcWwk7cXgtYBKdyqFRw4kv4X4VpC25MkBQbeHvJT",
  "key28": "v4JAAkrYYLRt8XYhiq1JfyZJFRpbJ69wHANvZRXfTFoEeg16jYaWfjmK68RuhGSRCoVXYCQEUnueRvxopV5dd4k",
  "key29": "uKqBo9QQ61zHpGo1aBm19gcuDrLdFYXKve2jHoDRtmTpgqvGFRjMrSfbaqFaji2hF95CKY8zK8PptScr3FUQTc4",
  "key30": "WWAYGvFvprofKFfrpHVBrxFHnF7LFRpEvNKWqGDBmz1NsqZsReiybZgLTWU64zZGmjiyzf7RXRqwpZPc6c7vVbY",
  "key31": "PQ5Rx3x23yn3uFVDDb8pmy4i66K1wzgJ6exskTFqeQjxcAvJTVAxh5WaaVjveeMVkyhXLYCxoTJnq3G4YwSRC7L",
  "key32": "5j48M1uzQskTfN5C8tAreCUuEBTFVjpW7eYUJ5buB431hE3byqD3JcRv3LhyfpmTVyhAYLAEJc8EUQRYvzB89qzN",
  "key33": "SC6BrfBx5kQ7znx4ssb1dGP9rYDJ39oArvBHYzqqy5XKXpMR34wvbqRXR2GquGrih9aBRp1iEWeKBhVpTahRrK9",
  "key34": "5PCmpMhsrb4sw2dJNpodRQRtx1kC9RwpRFFVTZqe2HjVsf6H3fS6VGSdfPEEK7NorDNhiMmjmkj7sqv3UVbeoZuK",
  "key35": "23drKkGUUkwFdPhKLyokXAxPJyEmwDdAJHAKVW4qq5VX6WudUPWVrAArqSadsae7RFXQ5Be3uy1S8T4ovzsyeqKH",
  "key36": "5BBV8ggq6bFi3m1RBzyRLjjuuaLssdpJvpTycwH7gUdfgwgVurDy4Dvd5KAhPQVsyr6X8uxq8qsWx2RFSRSHmmew",
  "key37": "4TyhjbFXrsysUb6b3ZNNWiocvPmD8cpME4mLssb1YARub3PAZnZibubwdGfdKuAt5wgWEqub3KDh8GtXcPryTrq4",
  "key38": "4xFm8UY4hXCUVchQHtXxMqPPpdFYhecDVpApFgGCKsjbWqTHxbhx4qycWU3Yy8yj6oPXwmkr7avitW6FbDZHgPNm",
  "key39": "5i75bfBCfQXZdbTKDHwGRQ2y5mWmzPDSprQgsat6EkTrqmd16dSEeurRRNHfDNDbjfuqBxkLApJqFjJWFYgEdviS",
  "key40": "3B7K1ijkCVYCifnuKKr79H6jjYZ61Yy8Z3mZUUAsupiwXFWaanhuiPqVWmPvFHScJZKSouWcQ4cnbSrLghnP4UQN",
  "key41": "ktvm8VJVqLCh3KLDmVtg4qKo79ZbdEPxBxAKZnCk1UGvP5wFp5Sh2pVVxM7vb8KRfg4NH51GR2P8mLge2kFuw3r",
  "key42": "5YM6RoDNob21UVWRsdsAWuhXEVHhpEi3L1eyE9yzETnX2dUPUVBk6cqPyM4QkN1cZNPHuJQWAYVUpbqo6zuoGx6V",
  "key43": "4M2vGPhhANE2fNnAyiNpDQNQz7oHswfH4s8goHy3WrcFamYFfeR1DHQ67gnk1X2EGUAtyz4N6r3PSZrSBDqadjb9",
  "key44": "67F513xbJEbwkKsVicDQixNjXaSqShdK9wzB4j8U9ihJ2PJTNCx3XehNxcJdrD8ykqrufbw4huWDMdCCeKQSAh57",
  "key45": "3MLNSieGRKLKFyec4SiTRpWhaKi35To3yPph65t2esgARV61e1uQndiougjMMWhJMJ7L9QnCxqFcokqEZfD8veoe"
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
