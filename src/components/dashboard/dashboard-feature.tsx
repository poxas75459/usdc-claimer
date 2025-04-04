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
    "2tHwpARGXP7kVqHbCvLwCS3MoiPtFRdhGvVxFoeVVrYXcJZEmdbAHv39YiPjBhQPj1kbSHriunVLTf8g8kHioW36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKeEswwD4fFUgQ7UvRAngHEgnSb2E7H7AyF6SLG5LBpacgejymBej24FbcAn7xVVrBbpAWk5UAPBVnYt85rehw1",
  "key1": "3HpCdw3LLHvhVAKwde6TypUgq97EomQg8Dmz7Q62bpMhqxeR1Z1mBMpqdNLg1e7q9ZQ3DCD86k2aGC8goLPFzXVq",
  "key2": "3qLuNRCT757ibzqc46HGjqAjx7FkVrSLUPL8QhAtRJAP9hAU8gDUTCNLbSdN6oRMwFRAQUn6vk7UrAFuURy4gbtN",
  "key3": "5Vx1i3hPMuZeYangmrkoyAgiguBqPNf5Hbst1Zf9bw3j1Cci9kHor2fZmZZKGiWaMSs22AWFHu9LQxhbzBM7tHcP",
  "key4": "2QdCovaAVmwQ5na3p4U56tKK6Gye99V3ZSKuW4QaonZLDswaQLChT3eR9x7UUcyMdYuAy9u4cKDYBLGDHKBF1Y2A",
  "key5": "61VFGwpFTbHVVGJaE3GKirta2k5KcQJvo9dUfdK5WE1de5Qi2WyAEn9rC5TbvAi2khBbypPVJaRqAtWoRxmLJTLk",
  "key6": "246csQAi8XF3E6tx2HMjeoFroLjcPpg7NwXeJZX7BxauPXvwmFpruUWkwXMHCop4aoqUpCzpqUniacPhKyFvr8Ph",
  "key7": "2e3VkgEw7zTJMzm6m4xf4kr5RY1N7E6wyWy44hyLPDNmjCkXcv6AURVA35ADufrtw1p3UGCoUi2U4ewfqwGx9uck",
  "key8": "4yAZpmNpUrmEu73dppxj4LcwEbVnAL5gt9xxQ2LpEZ93oSGXM92reyYqjeys2ayCNrEnzaU2XdvpgVbmvTSSj4j6",
  "key9": "2vLGC7tEbARS5FygYXwJVX6h6UHQ6nyVzc7KZxTmv9Nhfjb5CHuj9XxpQ1xEENgpE3byjFpF7FCJRVAKDKDwnfiu",
  "key10": "bBqyjnuXStuzWJuDkerSakYavkWKBs1gFeYqcLDXaywp9Y8kWQEvBbxWZxNqPBZJsmRRJPLoNjc4SweuAj1ecsU",
  "key11": "3En8fN42HBQ4bNVBbKbNpasmvEjp1BvWR1dJ3WdaXZt3XDjnogbqVKuH88RUMJREkf2S93bkqb1KQWecvKd3MVj1",
  "key12": "4nKdmExr7oL8rKWnbq4deuEVKDC7DBonTAQGk7ty3GbsumJxbwZ26bW5aa6br6JMuTwEGmghm5YyHeU6Pz1uSD7g",
  "key13": "2pZdjYFL7zpxfHuBCcESWd8VFmkKGYKDVSXnEKDXmQq3syHeML5RB3Jp2gAHCT5w1zzWVkV2vzxrtcizZejT8oKW",
  "key14": "5f2vYKZNALaYrDrE9NrLR7yAbc89VVPKsArbyDe86USgQxdtiAjK8WbTtUkwiE1ThHQXxZHhyfCK642UXRXmshCH",
  "key15": "AXU1vpT9C5W8fnJigYFueoioVXNHXiGQPeNaHj3d1DsMAAqrDs6oj8rM6A1q1BENnrmiGBs2PabYa7Sr9npcReD",
  "key16": "57Mob4Ym8zyFfo34M62bsYYZZXDQs5riPm46mBNUJTmjgXeuieE1gH4e9E9PT4avTs6xKSUxhN3esVfvv1tLxTBt",
  "key17": "xmA6QxNmVeoxfKgswuaN2ZT8vFvqF1845pJpsT4rP8XEiKALY5i14dUH5Jk1qvsxU7sw84YRrFTZcf6k8a9cWjs",
  "key18": "2Z8nTTTb7dfWsaQBV1iLaaciG7dozhM99RJsYbn7JHLRjHPNfHd7bgsM3cxKRGyg48mAoGXaKWQ5HAan89F3fWMB",
  "key19": "28QfRe5gHe8iH7PyAKAn7MFFvBS6k5jsGpppGLTydA9v5yHVjx45ParLC8baYfWbNZLgNT1V1hENBL3LJaRJV5kB",
  "key20": "5nhe8YwVUSxvMJ6nd9HZ2QgHF2qf9g7KAWQqk6ob1i9RcsLXuy1HDmUDL94oPwwpxavHM9MPhsWgCPeDQMKRu2DC",
  "key21": "39HTXZFYEeVmWZqgGefrHcF1rH4Sr5S6cKM9YgdkBdfPJeJY4FjJpZuuvQzwffvMhCMfZPbm2KUSNRNrLSVSnivf",
  "key22": "3UoQCQbRbFrSaADcfQ8g5wNT2qTod5MyZiLeGdwVcojtQ1iFX96QV8hFBA6T9JiABNnRDwHcknuwZikZXzaVBmHa",
  "key23": "2S7BVoybpgxeJ4ywK2BU5HLJxdx2LoV91r1CZzy7PJietJiRxRvQnTWNf2LcxQjq5fHkMMwmRr2JYsfXa7ui1HYP",
  "key24": "2aJgtq3ZnSS42RKbSk8zH2xnv1uhzYZWzWAR12wNDWovMNoYUjF4pRAizFw7EYApanPHKK4LUF9L5PkKGjZZ6h2q",
  "key25": "3d8jFkYGs8EUBfR14gQHdnFqZhPn8pSLsNWkeUgPMBpNgDttu37eGN8GZRSShHGNbKNcMrdMVhhZEwwY7oHuP53",
  "key26": "PH7Lrombo5LLWpiiPhr6k3mSWywbFHCL5THCLmL51qo2622zJSEdzQbGJf1kRrrfHV9dMwgDipBZ2D9xt4RSMUo",
  "key27": "BwFtRYrbfdtUfq1sy5gkwECktKSusP4yXXL1EsAtZCT2E8GtHatnnawKHvYRbHHT5uG2aAXsmAFVz67yWzQpVW6",
  "key28": "3ga74jFysQbaJff4mycH2EWqmNeL4wD13cphamHFS2H9XQ7zYFkXJWDWwmArjpG393ofNQF5JXDPARkcQUDjmRAK",
  "key29": "5h8tmUamCMT2LkdWid3D7ni679ZGgmR2tCFDCAT6L3dKQ4yFpaobppjrEHEXtXt9poL2JjK95q6biXhKZNGmetDC",
  "key30": "3VWhqkRr8xTrcBJTgpZ3nNLPP6xx6eSMSCTwA9XomoS4phtAiuUW36c8YJ3CmBN4YEaLDc3vwkRpLuw1mZzVUx2t",
  "key31": "VzpPEHxz5Y9gMPUkLbjVXZxPVtQrbTyDA3BjTvqWxKuoHyYheeZzi5H3jBHLaWak1iugYxM8oGfvLpiRDd3eUiU"
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
