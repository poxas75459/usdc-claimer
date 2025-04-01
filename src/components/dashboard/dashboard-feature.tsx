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
    "4N6vDMoovqiARWFFXQgDZRPfunoTCFNrehcAkUTM1dvJY2qzkALHKpHnZMHA2vaLTZduYYVnRT1Ss4CeWHciLWgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8CcBnVeP8uwJmYXCFfNmXgdqq6hnWRzVLj2qryp8bjR4bRUdcP8mtBG1AtQeaiDWrGM2PRK4Vs4cfPPgvSwDAc",
  "key1": "tVHWxi7cxMig9fLVh5TBkpUfr8VpDUTUetomhivUoe3ozbgb6y9Au953Vgyx4upZ2by8okr8aZMQijiGA2iJeYu",
  "key2": "2dvTWsLWU6iQcH2sMsJZhPVz6W64ZUeNvzESbxC3QNjJeW8ar1x34Et4pBPPsTKkMMpSbbDYagp9U5hTtJoTxL8C",
  "key3": "5pYPSQFZQVW1DNEvQqvX7LtXWVjDGXhuYUgJkv4zgmjWPP5Q1JnrLHiR69LnRysmcefK6drQGMscWfWbZevWRzRh",
  "key4": "3a2PFGLzYu48JqPrFkF4MwqEbVHx6WytEuoSKrjgWg6AcUdf3iLtfCSCLezxiWdKpBiYWkGqUfwtWkobue97nark",
  "key5": "ncc5rEpPvB7bgwKtHLik3aJdNbPPkYqGRxDoUDAzdtG6M7G7jSbM2YE8xcxJW2LV39eFobyLM4cWctQzG9gmFBq",
  "key6": "66pUuGefRNyD3JQoVQgdCt7P4A6fsXDv6gFQ7JB9MKhJqYLtqxLfPY6ycsQTsRLfxdXoEnubbgkyw6w3Z9E2uBWT",
  "key7": "2cdN98m5gwYx7LcFe43ih57EEcJPA2DjZq4bFQyib3cvGQEbBrcu9vKYi8qQE5p8k3UC5dX1F438WpGNC1JSxa5Z",
  "key8": "W94gHBZ5eQtZk7Huju8kyiJdDZR9dDdaDxmwR47ziiTtfAM3YeuHToLimJFaoFpDnnixj82aeU2w7pyGXnJASvD",
  "key9": "3REHFvqeke3GskWehLePvq1iaVSD6y4bdQLDTVXoHFVKMvcMkVWCEvMeewEtecSnM73QmdaFv1DEd3rosmNxxdLf",
  "key10": "3YRYAXgf38srYNoyLYaGoP3oDsfTnHXSny1iUF99LMgy31WTbGZjUH3UJ6kCpMG7eJUaBrHva4hoX5a2giAZw2Ut",
  "key11": "3UiSxj6JX4RyUnhWJLtr93bZezpY2HFau9PrcNpHLaUx92cZuQGbVtaD835bwwJBvUjaQCPfTQ4Q4wDEUUwn8ou7",
  "key12": "ycaEZbCRCEor4vCtF7nCnZzUr5FDcgGnWFwKWBLbQNNPPQaUq188WU42U5Rn12sBYErak9DPDza9eVaCVLAryyR",
  "key13": "3vM8LRkPpRKFMTZHMaoPhHiqaebRgQgaCosbxgsh3zmGukWr7hDP2zZUCrnyDC1Ax2gPKEaD7NFniVK2St7J12c2",
  "key14": "2MfcM3xfTmKj1PpbQB1QoL3ogXucREsnyZg12DCmZgvdQQr1UmsWTezU4yWJKBnJF9dQqwcMQBEy3HB7dWrn22cF",
  "key15": "3i5sa5M7qkrUDamSHokwfVjLnEfN4Bqwe8zWkbS366b9UG2NXgRducUcvaDVnyrddfTj2pCKFoujFoZtJUSfWePX",
  "key16": "2nWMN6hBbBJzfG8oGjsR6x95nJWMAJTkBKE2hCYWsEwaNtkKodN1nqFhQMbTmgmAkV9waENFhTCJ6Sw17UW4fbPb",
  "key17": "2jaSs8P5EkD4RQhmhjywxNBREVkrYdPeBXWjne4g6xuUADBcuBThLs3GpG8RoEzj8dtfbKFFqEDghc8V8yER6gu4",
  "key18": "52Um1My6QNURJE1c8GHuQLeWCJyggfcxnC4AxELtbp2qaT1qDKrTQ73qbDXEAPNLgKQT5qojFqjWFZtX46S3VrFi",
  "key19": "4j5QbhwEvaFdaihe8erdPrPfGXU9D2WkZLWCtWTUAbULSfD7aREjm7ByccwY95hovaEBHKoQUeQ2WMuzWZ6NWrED",
  "key20": "4gQjzeGjSp2jGRe3buvcBFi63k1qUDAurNvnznGez2cp3tZQLJ1HtLrv3hRvbMX48VtHxscprRSLqCJ5PsiucMtb",
  "key21": "5YLvvCaHPThb23N2C6hZhC1ap8Jri5LDGhqdpFtvi9PGF2hnpPiCmrFHzRLdK1fuDmx272PynPATKGvmLaaxJjrx",
  "key22": "4CVPnDMVvE6QucwezDE73b8dJkBVDvcbjP4ZJ68qKNxC73Uo7aR6ZCe7Bmb89SpFQuMM2bobrtWshpDwf1LqJqdk",
  "key23": "3Foj7e3aBXpyBtXSRbCneSN2rzuxpMyTJA5ErkgQGDha987y8LKcqgqVCwqfoQDteoDuGVdraHeLmY6HEzmHtexj",
  "key24": "4qXUiP6ZdQ5G97JtKXZFgGre7egr8qeUrjejno1VpaX5EZta1Noh6DeFwPmho3yyfPAvSVKVCPCcPezbkAx7Hi5Q",
  "key25": "296wB9HfE5RiWavssQfYu3LfobSBHV3u8ired4Eg8dRHtKik9vq6w5LZgPLQNLYgurP8Xb6QLYX3S9uGtZePhJWh",
  "key26": "KGh9GvY7zGMiZSYmcdzJHgyCTCUHiksU69nDQMwnxpU8hTa6exJriskP5RvuNXwpTMopBh54gudBvoUp6grLu7U",
  "key27": "3yhgFPFfGxZ5PA93MxtdVtv2qXYDn4G7joWuwx3p8EESeVoMJYneyEXwiurjPbkjNpZ4ny9ezdroRkvQmiKzGoiM",
  "key28": "3zML2x9hvV7n6mFvEYRQMe9dfZLnpRB3D1pMVGvK5pNjKPdvj82XrTx2hfTTxjqZsd2avC3LyfyfxoirFLa6kMSM",
  "key29": "2y374gj6ZatdRsoqVs3YobJcFY4tzLZsdtJooXcAphe62dKmkimB4uR7nDLgxBbT4z2hKSmv8iYUhEMo9uT4Si3o",
  "key30": "34gJjJ4js74XcejJMDMqLB8ctpmhHjYfKofLTsNsqXkU2jnMzaF7PS4V41GwH2r43YDqyCM8nZTq4irgeaPeLocs",
  "key31": "KJwTWE7CuyKAYHJ5jsofoBn1BFfTXztwk7Ud2kAB6USFFedaPAb6gKhT36SA9BVN8gbhiCh3Li5Dff3wwcGtQaW",
  "key32": "3vVrMkYyeoE2JP7Qco1VpjRqqN4uErHL7pdvWoMQS9Jz66QLFfd3nJw4JUutDNuAWuhK4Y5uNrzjrLDnhePAQiPP",
  "key33": "5ooZPNc3sjDwKPhVbqxECjJygUs3eQMW7ujwMPzDTsjN4kn5Ph97Tn45UjgAZdwdG6ZZTSziL7W4pRSNbQcEeTx2",
  "key34": "3EZvLjas4SMcXnhApDdBbvBKwfedWQp2baiuX26AP3RWdZG1LKMgEgSGbTsvc52Dr7A67k9SoSZdnGmztU6B3S4b",
  "key35": "3tE2XdxuiKMFgyFxJ3n76EaHXUyZBeUkWY7VuWvN7P1GnkvVr1gSj43pCtzSn5x5tJYfJevCBoxRaJeKZ5Ufqbv1",
  "key36": "4PcvnnPGfUg3CJv3YckpdujrTKHARXwVtGhRmDDjUYHQrrzCjz8w8bmB23S6y9XMf4ZW33jMUdWazh3UMPUpaT2J",
  "key37": "5JVdjova8PvMode93kksamyYUMGfxx8zrfbewsv9BWpwCV3JksNVTr4VGHNgv5PQiWhsvuNi7EtfU1bGnhp8cC3B",
  "key38": "2Lg9CVYMB8AiWFNdF7d82dHJrVdHAi9gLQ8CrKXsJkxdsoTRN8k8P8QbAjHshvGcvR689wxhPiEahCQ3UxepCmZd",
  "key39": "z8UPc8FYBSmaT9FWZUYW7F4sXVSGS7rX6FtmACWMUZEF7s5fZXBiWAz1qsVjJBcC799xjhbMwEqvMSNANevBbrb",
  "key40": "3zVUFt4tFFSExZVA7ZTjwBn1te3CrYD6t8A1hwwiM1jZKYd3YvhBqboaQ8FEvMULdSD8wfmiDczD1R3EHMPaaj7g",
  "key41": "3FAenfx5t2PLmkjpq7vQdUG32thW798d9iY7aHWJZ8xGh7krM7ryEWWDAbc7ALxFkA36SG9zuanNdnET3txwakXB",
  "key42": "T99HiTUpAWAbpZ8QSNN7Y4xfDmv5PqMdhp4P7TPy2u7NEtkoXizZSvTH4AEvnw4FRBVe95sZQ2JUPmSRE6TCDet",
  "key43": "25FmS8uXQs6zshct7nogrKDoqKRdhWbm9dXAYTXSkvA8DYUvmgJbm5zZA1FM7Wqkaw79ygLuaSXyeQrCc5aXsMgm",
  "key44": "4ji4d1GkWqK1XqnV672xHt7cZvgEuFMd6TMvqdaU5ZZaiCApcE7ia6X65W6rBsSdjodgfkkP2uV9mAy28iGkAqkG",
  "key45": "5ehRsLhf3KSDSNYLQUVd9qJ1Aeje3w7EAod9PkZs8R16Tqmnf4sBmD8i7RXSJK2ohgx56rP5NdsQGj2nMiKSmtg",
  "key46": "5hDhNj9zAsfGJh765MQCYBDV1dWzMvSBdxWMriykZ4F923oLSXDvp8hi1kjPvogxMfGwFo7MD1A7o5XKe5N9ZDsW",
  "key47": "4VCq9T9vK5tAQo3DzYS4SBy1GNomxKbR5nLdoswsJXBUZEZmV6hU7VxUf96sTkr2a5ze9NXBbiGEmYhctSXmiH5E",
  "key48": "4vZf6zLicUPuy6Y3qWzHdrEGJdSf2R1fEiwj2D2T7EMUaVvtF45btdLo4nzkPiunv157PL1kYvxmeZ6AThBkrraA",
  "key49": "4aA3gpdsVDYMVWMkiosSuSxyYJd7xC4YTWMy7CNd2nn4C86UzDjbTQ1yUbLaCWrQBbnG8aBEszf6vH9D6ecrpa6P"
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
