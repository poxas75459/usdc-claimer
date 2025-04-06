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
    "2rJ3hHkeuhkVDyR62Pd4Xa149TYrEW73GkqWyvRmRH82JnVYaQbok24qkcuqBUKeayfd2EfnKp4c9MZNJnyjpzb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AReRD3XyaurocfYrU2MBiePxtTHEGYP9LNbfBbvCRNv8z96yfPNJ4TZYsubEciJn2B3HuT1deyqjZWGNdfsqc54",
  "key1": "4ymiURsMetuCRURqiSmTkNrdxB5Qr2jmwQqds1Xpw6YVVeqeM4aGVr4g89bMvBK4mdPrD8eSg2XuBZRc4YUU9A8T",
  "key2": "4kcpktudHzxzrM3GzF3agRW9uxsooGEYo7E5BR2RWj4oDVHNrVfYNopyqZXdWxx7nmDoJ5vQjNUWDrVRpz9nN5bp",
  "key3": "5Q8mc568ePmNfJxPJuXznkxTAvcz2BpxL5CxPGQagEHNmVffpy199H6oMY47qZw7QxKKNGpKcUBzGuGjNrsZapKb",
  "key4": "2EJPTb7aSCZRrM5mHrJrytj2VdnVS6RSYAsEFZXZRSo7vEM1hTKhdG8Zn7sKzkaz9kmet1CyM3dGPJR9mv1bCvoC",
  "key5": "37Y2E2ThjkJuWsecePu6hMv3XdYwNdrPFPT1Gu6UJQ3D6sQ5ze8AQbq8pUrwhnPkynsCnuxpUBjZyifLfkzwCDiP",
  "key6": "557wkppRBPGKPy9W1wJZfvd3hpvN7MvKfe9jFyhpVGaA9QU5UcUAGXKDc8kxEMqP1R7FwsrmZL7FiT4XXEHMrUVN",
  "key7": "2Fv82dEFg6hP2E2hD35Pf7AQcYVavXTEXeL7LhAT5E1beyKSdVVtVEn11WBWbiYBqgddaJGyfydgVep8uchpHWXM",
  "key8": "1FfRNDUNhAsRrYaF4PAxdGkT3WNVToY4ePXXL3xHcCAoiEsQ4TJrmGwjLtNxR8U6ZqpJfEeTibrRLRMoPu5WPHR",
  "key9": "3GFXCGTt6iy8P23subZjZk4ikYNHdyh7a1ngTGah8y6nui2SJiTpeY2BAddUZqTcpqj4VAjfqdXFPzcrFf1WpeTQ",
  "key10": "ouRWohnrroaTPmN26HpGoDko2dXdZqhqGhbrowiYanX6Pe5ev6sAzzEAPKVhkBL9WeshQTa4TBB2GVhLoMkdde8",
  "key11": "25nXdKoooScNPoaM8LnmoMGEEHPKvsiKgP75AKD77JYCDixv5ru9TPcFcFCVF2K6a1NxNCKPj12k3gogtgUozhC4",
  "key12": "oq8MKhuUcM8zCk2UznhNyagQxKYdmAswFFh16HJXE6Rd6AWjfJuJ6frVxWVXkEZeRffTeNhbLnL1Ac8VcHXJMKG",
  "key13": "5cTL8BhQgxdHmbs1rtWW4efYdTccZrNMJDyk5Do3XzNDjKzaYgggosq3ytMb77VByDTjbT55PiM4RoDhgZzaDK2D",
  "key14": "37W9YwwoauUauiynxvyff98Fedfm91yynNxBixuY8S9mntehRCN7WALckwcBPRoWmyGNrcJ9ZEg3TEcGDixMEqtn",
  "key15": "3x4wQZSpWTyoWLiReGPA3W13vVUcoKo6CsyDZ7LdK9frT6kU5QQdERy2ZSxbWboUiBgbucCQYgXEKdfHPFKpDjRi",
  "key16": "quEbuwQGM1C8ZtUUBy6QKQx6mEycSQkGs6E7NV3Nki21pHGj6qcoptkgbAdC6hEhf1Yjy4RTSUkfvLKHRPg4rb8",
  "key17": "47wRPTgT5q72ahCA2i6k1z24pywSj25Z4HLHoNtKRPxsyvKVYbx7guT64aLb5R9LAD3GC3kfvqt36PFdkihT9zau",
  "key18": "5r58Xkn6KBCBQRNUudadAnof2KNtvrQyKdJdBuqUXoVGNFACEPQioWMiPfrQe67k7VwQhSbrKN5gdcUyNwkrd6Lb",
  "key19": "2fzB72ny12NA6kUafKYWNCPARBnXoQyGYQn4w4zut9Gqo5tBoXb57sHVJWyjECEVdjT9A9Tj7Mwa87dLAunx6idb",
  "key20": "M7AuD3HYCQc4dixqzUVXVpaQL7VwBS1AhguUUgbAhsqcnSasDmDs7z94NpRDV1sNvi2NsFwitggHHPJNjTJYJ8f",
  "key21": "59Qq4uinNKsAbV6bknwqT55fSujN71zuTtAfQLhHNC8pjntp84N2RiRtp4YdJevEMBtLQaai6mRXLrWrbBpoEUWy",
  "key22": "3HsZALRCYcxxHpFnozAYURV9MgF8y18UH2BFUHREY5SoP26aKxSgvqhS5xjaTGPr7DS7cup9NFFBgxYk85iNqzPG",
  "key23": "3SNkMUMeagDFxxQAAgMS4nKSefKZUM6XXDwnwh1KUpxgnNGrUwi5Dh7sw5hFNzBonrNf8P32a3F1BxuP7mfVb72u",
  "key24": "KtPKiM6StbgV3pR345ob49fMcUSTC4UuqrngytEnFQ1ZVtx6xQNy98XbumcTRXA7miEgKPCWJn3VkxBaSYhu61i",
  "key25": "53aATkmBh7Lve9HeCwadaNXQrYw5G4S1fv173sp9R4KBcSbBWyRgNHsTsxHGJgiV1oXnZDifrgBf4RsSsnjd1W3X",
  "key26": "37ufgqDWujFEMpjBAkvFDuoeSfEUDne8BQzESVhdCXKn3yXiQtGg4mXgz1Ls43Xi6PRRUwNKz9mNQBvCP4RhbxgQ",
  "key27": "2x4VEotb3ff7uXWU9gMrKhy2Wx3dTowm4ASEpj6Q4biwbZqdHUXq94BDP5fN1826cVeQAPjDSmUWVbr2VpfbNxCB",
  "key28": "4WBVgbkwXiqREYKBE2ZT6XcKumxv63C3LdrT3bsGPB1d4TTf3v4zawog7TydaaFUQtkjSjagMv8iH1317UkDVCk3"
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
