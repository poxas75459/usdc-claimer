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
    "ZNkLsArMqJz3rTHYvh4B2hXoqXYfFXGH6B96cVXdFEhAhs1bfzKbva9ywi5XfeKUiyUPyNkB2NiKAaBRBndFRpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAVEaDBmf1RZyTbGp94NYRfkd2uQ38o8ZXesHyu743ndrXcwQSn7nQK4AjbhzchF1y6pWE453FNfZUchrSfXbaj",
  "key1": "ed4KdbU8eBjxQWaQTACoYrzdU9e5eCML5nhNZFBtUBFkfAiTxehiMqdxGPyn1kRinFCq2RHMyRDtwAxqhh55RsT",
  "key2": "5RoMarWjzEYugcVQ93QqRQn7i4h7VPZCwTUqyvSUDP4Vzc2VLzPcb2dLkWMbpH2jkZSx6b3m9eZJW2NVTVCTgL5e",
  "key3": "2mf1fEY6mo4XmVBo8xm8Lq2nyMufDk1aGT7j84jDfLMWoVC9r1n8dPvQFFbCxkY8Z79LRt6fVhhQBk7kAUAAFo5Q",
  "key4": "4aUzACkxmMBtQHtjN5jePXG5U9Jvitfon1LVuLwHo2CPMLcjeKp2xQKZdpUxheNXvBX7CAMaLLt1SnrLuTQV1rFi",
  "key5": "4WYAhPJbNftYYubw9v796JHVfonQL7groszB4sWXuaVZ8yUVdGmuGHa4FEob2CcbqfJ3NPEgpRBYbjprZshbHXZQ",
  "key6": "2t5oqkzMcEkVb1hZsXKhNPNfKoLAMkwZ8sUf8P4K19tp2HzrnaVRN57wGxP3nESbis7zuikQcQwGWRwYBTGZPxst",
  "key7": "3NwK28cuYubrSRTd34N6Assgdt4TH7AwwdhCqVZP77vyPk1qCuP1JnwArMVgL7HGs1bkiFM4zYcatcvfgKXTAi17",
  "key8": "5TX6gePg7Z8vtz5sDCm5q1SF8FAVZV8N79hPjZ7qK8XL2BmBt7BVuHGWXuz555v3iwFfLEeypxfx5TzXAsqVwmdC",
  "key9": "3sgk669fvDz7BjVUDr1oTfgfsw3zhViT3CWWunZhKoXtguA14AuuZTmC5J7avH9kw3WKHZWnmgRSMfUNypGMdwyb",
  "key10": "q8qHU651vfyj53oKh5MxUTVZWeuVKZZekf86K9DFkYddfd2o5ZAS1yZrkEuU9nBjTkgqF3D1NWyninFhZ9yfxyC",
  "key11": "5LGjLHZHGFMoqYJJcG77PkMPMX6SzEKAV1P8cENDF4QjUQPm4asibFK2ScuYsFauQYYF6EyeBcqmNE89a3AwaZ8o",
  "key12": "3K22eThZimL8NMVj24C34EYZzjy12wG4FxF6MTLgSqbHDoieb8n92SxCiVb6dNrPmuGv65cLYqfJd43ML1P5AHtS",
  "key13": "4v8WK5MNLj2Fwv6bwdqF35qn3Qpz32tCDxwEPikJHC7E4gMVYZRS6XCr1Ri8WtGVWja9KQfcgFXEeeb8BSoDBtA2",
  "key14": "3DnpceUP7q6ns41G3Pg5KCfWnva67wxpoacv4pfCcDXJmMQW3GDUpQmNqFR8U5SnAU2oyfVcXbBeaVLVbvpGDfeu",
  "key15": "3dLxy12eN8yz3FbyoUriMjwPCnnhT7auUiCaBvgc2LH9GgVTPSe9bYaiBFEQGi3TrTES1ZH6LdUAgngzyeTH6twK",
  "key16": "4sRPWXqLC89kyBjnBiRnvjdxHgR1oUqm9swkiULgwZa1DJ8W8eynvxtANFtMpdxPucbdjfR22wEWoTzSQiWHnTZq",
  "key17": "5RTqTyDT44Ee2eqPzPmZaUcgQZm57Wp4imXZ4i3FrtqQSaxrkAQqQRh9PXhA9wgcZZQhgnzjFs6bBzLFPBhKtQ71",
  "key18": "3vXrUbhXpZw7cMsiL11Mvm4XLDDQhJiaKcPSx5PCRMxzwjp5SSgSYHFdDJ7bV2TDfB5e4AC94sWqUSkX3FQd4uJE",
  "key19": "4JezqvbKW9yDFAVDoLXGtVRg5VSg2QSfAR2RimJHaSR3nB1qMq2qjzFroiu66LvbNgt2QCnRaWjiTFmaJfh4SuMb",
  "key20": "3yWrBVbbUUyAdtin3yrCJw1cAzzEhcZ2ernRBk9fgRrmZtgVLfZoTU3DhB8JsRfmdFxEc8ka3W35ntBe8EEJzMSP",
  "key21": "2ZDUBDoRgrPBwZQmdLnBWL7r327cU6bHbL2RXnqBYZTaqxFXaqMMU3CUj6PhjnpzwnGSXp8dMZysrg68cASQ1t2R",
  "key22": "3EZE7ZesspFgwTPBhbRnnuUUcjH4ZwC2mWneHu892cDMNW9k3FLBBzCiUw8pxBa4c5Chnb1pnyebxbRTM4McxJdy",
  "key23": "4mfv46V97x2RoVMrCda1EuE7Zc2BrbYgXAqrMgqNeDU29o47qP6BFhrTwQCtsXD36DN2jSsd6XTQMcDZ1akkqjbu",
  "key24": "2nadBp5weJg266AgonGWddFqerbwwuG7xoJapMmNGcmoZPi7G4BvtYtnb5HBi4b3KCyxL8ZSDoziFh18YXexADE7",
  "key25": "53uExqx3fuFQb44hfzECffevEVmQKJaTQzD3TunCxbUvMVNrGuEpMXojTVpiYAn1vztfkcvMq9ErXjt58c3qjVXu",
  "key26": "3XrzTTxDHeyXhLRHNMCxfdcz4fV825GbKAb7cLwdb7XfZWLXDhxSsugPGdDKc3inVFpFE5DgiCxMSC64wHPbRnag",
  "key27": "5ETjmgNdHaGM3SmHmu4or5Yck8f5Wh3bGQhNWbXrdFj1jgoUeGF8Z8N34phpUTzfnBvACz6Cho4bJhU8YqdmyRXk",
  "key28": "4AyZeb5dhx9icPgAHurUX1fDks8aWxizepDLnjNP2pfiabNtVWthkj5Mi4LHTiZfsNMuVt9bJQzamSxQuDb5Ti4S",
  "key29": "5PUD32orxmm1Jup62q3fp7Wr9La76F8Ub5rezi8C4s6UnSDq6CyQSqTDSGqSLr2xWhFYueEgBy3F5TbTYdKcAuYE",
  "key30": "3NhTzuUNxmnVWn7pA64CgzEDLPhmFcHiyt9e78Zabnb8WMinZShXJPRcrT1hSeKxUCqax5Vb6stVDupWGpWV16wu",
  "key31": "4dHpPGihJM1PhdAgE6YPnwvTNh6pzMwKa8VkCoJeD2fgzaL2LkpEgEyNioMiaAJX8N6M4Xf4MR3hbWR3pEpQ9p6",
  "key32": "4nhWfW316DWhiBrZsHb9BNWmsuUiFiPexRKv4Z74NCScLa1HEtLXeWtu1LHYxvgJR67hLg8puvkbwFFQe3vCm8QQ",
  "key33": "3QFtoPsBdv31TuZFR68heR4EeCR3RFpHHkuBMdBK8gPbTG3K4TDEfWsGjp8bQfUMpcdLy1Y1B8BKgFgoeEnhJDvk",
  "key34": "4tibMaq26E5UcrBD1NaoK8GCKnyw91mhsGXbQpnQEGqTeHcEecP2MK9CKjKStWWhYuUroqQ9bZk9qu4F9RqwAv4M",
  "key35": "sJgGzzm8YXiJoMNp3KXnJcDSg8WJbFSXtS273pQaJqyX3SBigr1VP7eb8Pj1F4A32aVh31Tt5TBnsS1zdBzGV6L",
  "key36": "4WZYwGngMBrMpgCVrf7WkjGrVReikRH54NqW9YuWt1foF6Kc5sydAhGML1E4kpxeZezQDqno5whnTc2KNYmA8AMm",
  "key37": "3S1tYpvPgVjnKyxxdqvdu9nKxQ2GggG6fJoQbaqdvZucZZ2p1wHU7Fj9Ka2o8xWuEWYcGtAznrfWRSXYhD2fPVNR",
  "key38": "3Uc2MbSvRHrc4dFEiNZjoDwJhtmniponxgKzc1FwnYBpMRPg44xkjz5DzYik5ZrQasnLULSjFUzH6GKdGe7Ed4k3",
  "key39": "4bZykzrHc3Bqx7oZgQ2wnRgX9n2TXioWH57qpNrJVBPT7kXM2udm3y11NuqJTTAJn7d5sN7FYB434DSxFkpkqpAv",
  "key40": "4cofmEX2ek81vvXCEWdGmfPKbJ59N2Vcz99t29E78cUt3BprUHzWRXB2oxNF1SqX4KgkzqoVbR6qWHr2HheT7oqZ",
  "key41": "54nvPipqbfeV7ht6ZEruVioU5BZVYZir4ajCdkkqKRMNgWfiF5HcVBz5nMEzLgUCECg9BvEgtSvUt24MX8KZGUx2"
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
