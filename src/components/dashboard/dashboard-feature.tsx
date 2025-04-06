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
    "5EYWqB4WtsFyqdJUiWuNUYcsPjmrFVHCszbbU7BXtppV32BZcHgyV9qVae2rPHN76RAQD2wmdLeR29YuprdMQxdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfdtNLXWvqRVfWRUWCCZDzcJRFFgrugpm7tu5BuQYFt1n96kf8LnQhLnMEpXyLxSgwdKnqSKXxMERYabZrwccMW",
  "key1": "ohR4Z4psu2gXtPCc78YdFVPCN1v4kuERZki7CLANWFoVwE5UhrfTwq9QPUxQfhoAbeRviJjS27o52RRNHH8Jb16",
  "key2": "4hV9Ywx8Xv2cuq54AroS8obFjXBbsLDXXwyFMMUdH3mM81WppS8UCpAa6Sc9U3xwXaY8kpLvKLZUY8huoE5oirXZ",
  "key3": "kjBd7iisCNTJoS8ujRvsCG3zYFtX1j8GnN5CgMRRjkAgz4SkwJ9XzfswCSFwtpoMJxPrDHFXWfxfw8wvEeRs6wQ",
  "key4": "3nxyXXbetdPsNDdNuyNb276rsKHjjXREnB2DhTd7WrkZmoutXZTQELVac2Khm5sWBFsVgCVLXinHFJYXQDikFdqy",
  "key5": "2ctPXcm41f3mgZ1KSuVNnDC3YbnFL93onBBGAat6iLdXGFnR9JCe6EKZwD3XaURQkSZHgSiJk9Qyja6nEWc6LKNt",
  "key6": "6w3vAWaJuYaFbszNigraWX6uc8iboh5jF4sxEHR3zn1a7rXyKnA8xjHAQdJhoSxxj43mYQLFGvrjFBeENGaHrDc",
  "key7": "cVM8aiiCDQagUDhWnDtAjGodVVeUP5CX1xzQCmzqvnar4UgLh4hdSuxVNQhPjC4sQy2xBfE3i2pPJbRmgMvwMBy",
  "key8": "4meKpgKjrATpDppNSRnWnYs6uDHeyLscHMx1J8r9yvuq1ytnRiry4SoDX4U5g8cYE419NVU5vtvCvWzG5YfcxkaZ",
  "key9": "5Lu77hHj6NmHsmk1f1xnDZ23UC2BpuwtHq6SZMEX9rJNSnRGPc2KcbWPXTgRqCphWNEwYVJiVpTbSYuppoex4JM6",
  "key10": "5rraND7see9dnh3TwZsavcQ4avadcHJ6BVMNysiCnRfQyonbqBhR3KsJsj6U9zoNQo7eyt4pH3mX2uMwb2LntyS9",
  "key11": "TqSH914QzV59uW4BA2LQ2cbfKmpsyVEmJ6GiGw6ThTY6ykMK6GqQfKCbjX3LnkxmopnXX85nRFfvNn43ZZ8tmmx",
  "key12": "aFsn6eB4ekR4KRNqpTK32bDJhLQMX77SiC41XQgfPw2av8WXRcxAviUZENzUJqaSXwtSF9cnzLGeiyMmAg68p6n",
  "key13": "44UiypmPBAzqizybxvxGskCscFuFKNWyD2jbWkKPCgj8yXCktPdnczLoZktnWWhun3Ww8QTjeanX2WgvNXcsbSb8",
  "key14": "4zT3U6xaWA7uhJhExwvbUe7Hc4tuvf2NQ7i8y3hUGzYyAvMJ6bdLgpxh1nioXu6eokKDxhLGpzjBsqETKQjdQWAQ",
  "key15": "266btUCgVEUVKvWwF8pCSWWkrecbe28JXXC8QTBjtiH9kCCLXpkKbfQgPULBFXYjYvvYupuLWzhqgCjtP1KbEsmA",
  "key16": "5LjPFqUvFWsv4nzvnStssJoYJmC1Fyoa896Y3rVtkbt8VmNEKCA9i7A5kJht4rRexF8Q6oZdqCWXPkwk54gfzwqB",
  "key17": "613rC2qssEBDfGkCnUYpkPLPKxqVHsGFGbjHpQhHDibQKMsDNofxRhEZG1XVJKwyGnMJanxvFyh9ryyT1GNHbnSZ",
  "key18": "2UCzhu7ZyYVqviidWNLgUX7m8Vr8v2advw1yc1ZHW4izbcwXAynBvbdUAnWe7SSs9DrrePHTK51cgGKuEwmW58r7",
  "key19": "35o9Bfpn8Xi4jXP2u1mqVYAr1QoZsoqoXzHJhqs1rpgrquPefpjGXpku5ySzS1pyqH2avUB1LCcuc1PeYvuE6f8f",
  "key20": "3qLnqY2SoyHFGyutHmh29zmaRysZZL3qCvsrToRS3BG1AKaiHA6FMBg5nSsMjyikf1SbgTaPB3qXdMLmsWF4W6VK",
  "key21": "4MuS76rv7W2jeVWRGd7ye9dTGDZLJz1273TvjmD6mPcardv4ueMB7F2cDZDRz3ZK4UrCB4fP7u873De7toBJg7Tn",
  "key22": "5RPA6X2eBt6uqaz8bz9M2kZGyHB8r9Z9c3XF9CPHRsQN9qeKcqzWo3QDEcB7u3f9qe7QSaJPCmsk3XZbuQwN2met",
  "key23": "5wur4bZJ66ghUdoxZMhSbHvTHts1NHRwkBYqW2DueFNt7bJLiUjkvdq194ezFFkkiaxYhiSwUs4GGuLukZEyaECr",
  "key24": "42AyggnS6ZiXUZ6g9sZgjdWXJdXLq1R3hc1H7gEXJCgziQWSX3dfs89bwopqqwGp3sVhaH8HfiwikaLhSHfXUxGF",
  "key25": "43QDBMSKN6rAZxk6tvQQ3Q7UFZWpLV6XaYHEsmduw1PsWwboBKJ6Y6YudJfEXJyKzoHUPYXas4jqCThpPEbpHFG9",
  "key26": "4Ym118LVP6TME1iWdsqjbr2KBnJyJWzXqSoKjCJbUYTkuBmFsSwubRd9Cwxuqfy1khCzxWWeVzXG8to8Zp4UVmH5",
  "key27": "q42cZnNJWB2TDRwiGee5ksoifeBwdKESMTQTGeJ5oefJrbNHhToGAUG7RbCuQ8MtnMoxxdKSbdWjShe5NZwJFiD",
  "key28": "2DKn9JRJcrbxeMzQThG4h4hQWr3sVoiBs4buK1BRb7higEhfp86PQj5kPfX7dcvpWMT7XoNwp2uV61S1PrkfPtcp",
  "key29": "5pDKAVETiB6To52KijrWds4ZcWsxt6VBSWYHka1jhMsiajvZ1yoNbjHHr2HoobdRSFrEiubrtNR6FPiizguQmdnr",
  "key30": "5cyetuTVtb2BEGtieFWiTMMUUcFWuVAyQGGUgSgDW7fRQA5mNiqCG16KQ4DwbMx7ovEB6i5tyEV4TN8uAp8y3tJN",
  "key31": "2cp5eKgrGKUhzFvwbDMwofkyJcS4b6M9fv1MRH6LB63Y1RmonYYrzZtcjN3LGzX26qshhRwiKJjy39gBtbbVctwU",
  "key32": "53gTJUq9Ya4LRVKg8hPSmdKp5oL8a2CuWRvcwXk4w3cPagLSBQXSwYdbUStFoP2PCbWL3U7vM84QvBafXNSAgjjk",
  "key33": "BKBrDMWyjUN3eKhHycx8SJuuSq8TCZKW5Qw7U73qGx9LuQPsr5JsT2tWNFXE4Kzv4sj1wn7ZRBJbQpCzKRSFoLp",
  "key34": "2GhFNDmrdgj1b8YUWBov1LoQGFXrr1i36tXCBxNKjATCzgeJydisoWQrepKsdv1ZFXkn5EmEb6pS8jxtqt9NChba",
  "key35": "2pVLb3itzRCF6XvN4C9SNFMDCVtp5qa5LmfFREF1M9Ns38QYFtYaKYPqtfRM4PLFDupNzxtTTouKzkrjex49Kz9V",
  "key36": "nMu2tKrphf5j4yWuPUhuHQQtb2vjv8YDTXuLC2pNsTi23zajurNUvGYmPTbLoQLvVf3N8Nb2LuU6F7KBJrNHpbt",
  "key37": "27x8wp9W8eWLJeZK1FSVF3Zu6hDaFDTeV5dhpc2EiccnWrsTqhLsegN2qLUBDHB4GeD8ZtAQKa4NGysMxGLJkNje",
  "key38": "4MxwMDWYXyHPxMMseoRsPbPcNVzsUQKLsMiibxnUJnZZuy7rVQs4bkQs54Vm4cHssCJJr9sJHMJHwgxZj17YKDXg",
  "key39": "2ZJUoe3p5cvhcC97hiXyKZykuHRSGaa5FUGSd7qJmPVhmeW2ZuETiomm8xBApFEGxCGjYHqoZWmVzo8qRWUunADi",
  "key40": "24KohV9R43Ux847HMNFraKZaxnWfUddoA1S7TqoiSiQtz6geoFKGHBaPkSmck6Wpr8P8VQLy6wL4JDGA3AjkzptG",
  "key41": "5EacXRmHGnenUiax7ChmhdvqEz493nNyzq7mFA3PC1CQ4kuDhKbWyBtTauiXEZnyAwNruN9zDiY9gxT49tvzdR2w",
  "key42": "5ZAwa7jngZqG9SwE9djv6XsiTNAXwCQwLJ8pRM5KszGUChv98LG4ScGgAgAzYKbYCXyw4AvSRqu4qbU5MiPgNuqn",
  "key43": "NzcEHxJkQKwykB3FmFciTFgauetUSoaDq5MsRcNXNES31bGYYMBLotxWCLZi6cM3ja7kyRMKiqfUePDo8Cft1Pm",
  "key44": "52pxiNEmnpt8MtzrYzaKH6JWghCC1Ee6eVWpU5EYBYRkzuyQ5NNKnXCToCTfrHuHcjdqrXDATuf61qQwDCcEtcFX",
  "key45": "4HgPKAJbR37nhWbuchUDws3vEzdW8tMqj4vJC3upJChEV6KFCgR2CxRabd56cZF9Qh71rEcXWcCs9N446BtZrSKH",
  "key46": "2gpQt6nNym7F426n18mkMFkzGus2wbueGjjfZveoUUNdXN2JhDvpxEzTzokesJ5ofaQt8fSkVz3kDynhfZTydwwJ"
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
