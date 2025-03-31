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
    "4z6AKSypj15iThUq6uGwYUdGgi6mG6aS8FecbxVAs5F2vxhytGjZjwfpvugSqoifC4LPJr68qsVS9iJ848uraVzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGw1oSBJwvdHaRuSwsYdGt42hooLeh3ifwNuRDXDDMgvEH3Nfct12pwChkCEKa9Hrfbp7CTWLavXmrhhnEtfp1e",
  "key1": "2RhTYE7edu9K6gi7ijNM4fPMEx5A1aaiNAA4EAV2UUiLHuHRbrMDiqx7YbzPxqEA41kDAuUacYPaThuipXQt1MqL",
  "key2": "4FFSUbqZzVwGFtQoGYS9xK8HvAkqnUQrNkKxzESURxH8dYGAEGVTibqJy2rbjENJbctpXZpNk497NrJBfqC83taz",
  "key3": "5dsLYgWmdt6k3aAsGudQobqfDmSwTyfNJmthakQfEHUganWM3krvD28yznSugirhwCfbz2n8fms6ktoqG6XdDFin",
  "key4": "43zkPwF6idtJdRKzDNDJ1CNQFB7vd9MwKPqMxzvaELxjxqiAocjsTJS1bKejuLyP3Mh1kBuGkBibrMLoNy1QZF23",
  "key5": "4gzANQyA8R2rWWsJiFFLabQVSSjAgxjXyTfRGUKESMRAFzammhrX9XKFRpDB8XnYnCtgynewgPwD22sr4YY9VQBP",
  "key6": "BB8uoxquAXDzTJSmYs3t5oY34fUpgipVDRVkj9fe4C5w3NxGSsYmLCGzKVLQJs3tekcakvJdyThx93tHwaugE7p",
  "key7": "5xAj5a2AAffLv5oq7MP9MKdANoURdi56XDZxnF2wHmfB32z1rPAtkxZeNsZ5DRLJdBL6TChp3mA2RAzP7JB1M8Hz",
  "key8": "2jjTNzFX2S8qQdoWyjTDWAfBDx9UYVgWePXCBqSe9UKk2vsbZqVcZZndB6QDHHZd6eYm6DEB7auDfNyXu9q3aieZ",
  "key9": "35b6pdzgqWir22L3P7ym5jxCC364rxmtiwHyN2ecbwR5vkjh5FRVRQKUGMua67VbLV9gJKrSJ5ZVur8Zu2C5E35z",
  "key10": "5NNhry4xQoaTyt1DANFLoHXQQLPH7p3CVEFsR8WbLLaZPkkaigvywLZxAfeDQL869azZYr7gSJVnzDp9PpU3jC6B",
  "key11": "Yuma3VGnspKL7WnWK4Lypr1a2ZWvUhk9PpmYj4mbCmVXEpbyruDxy716HYCbWuxC4oTc4UDSER9vDZehQkkEbgU",
  "key12": "2RmtzDbnoAsFru86HJjND9VcmQHAJTHRSqjAzK2MqfmXiWdy3bCZcLLq54MeRHu1Zok1bJhUkqdnt7sB4iHsCBnt",
  "key13": "2RLzp5512zXagpJV9fu1w3nYdStSdtRQv4ZjbmyKeU2sYYPK3kxEym3W9mhQCMXirheKZxHpFXikiMNZuocR3mdW",
  "key14": "5W6WvWgxoX1vZZaLDA7gcgVqtDeu5gPv187XCTPrQ8d7npjEkvS8tFXMAJ8Jp88rbV27TPMacqJhjDsWrJxH67Pw",
  "key15": "3rX2MQoQK39tkSU6ZTRWL2VqE27WKHptQ2NUNxakkU5Rc9qg1FE468EyJMjUrxUzf6mwF4fpEj2UWD9FXJpwbwA3",
  "key16": "3gU4ejd2CqTGfCZ2tn51VNqdgGXnijWa7Vm5d4i8M6enMAbKm4GNouKfvMnAWGRDyfJFpybQ6ZgZuouZLBST1Hr2",
  "key17": "3CSzm2Xi31XGXusnqafbinpAYmHSR5GSkTCrSoGPkPoo5F8SYfkKwPJMkjqCcD8TxykU61vffs5JzgzPmwoktu6L",
  "key18": "4H7Ff8qkG9VAp1HSzuVi6H9vV3d1neWFUTkrSBjyNxD2ECBvvANkCHM7ZPPmKEDN37ayzha3yvztn6HJKbsDEpxB",
  "key19": "2S5YjG2eXMNjAveSqKziutPHHcZm25bvLNPJuU2aYgerrqWomZQaA2KeFBp6S9x7v5nLXs2DQTeTHyR5PL43pwjP",
  "key20": "4apvYaTsHDq9YpbB5odFLgF41kNUBEYBA5heMV5DKnGTAaAz9wDsUdYEs2LD1vSFN1W2afxajPuZLCaK9p2EFP1h",
  "key21": "4jCxikoCzefVkKwUr2oqJQ77kaw9afLakzc54qFrAcBuws3BZqGVgPUdsVQencwM8jLH9gtxkWVn4gaRG9AZJKer",
  "key22": "5HHRNXZuJ6RiCB2iWDcf9JfEkHwtsqcLnvjAfyf2k9fNmqrXusqyjBxWugobLPx6y6J5JrRVneAFJYTDTFxvjigu",
  "key23": "5XdmLBAr7pwrf3y1yYFgxYgE69kFEt3h6LeX7C1HsfR1jkkoCantkoJekrG3NE22o46ubkRsaJjBFMM3PTnXLvXE",
  "key24": "3d7qtzzg1Zidp2JVqXJkKLdQSZHngA4Q4Cghz1XwcKp8DXzMsKLumHcd9UCSBY3pCADCRSygEjGDsREpGJ89gXkC",
  "key25": "p2duhWpYkjutLXjNhvbFARaDUJVKY8JXkNVGF7C53BrdfrZz7XZa8QBaweL2614uD3jaVH6WJLR2rt5Z7qjNCFk",
  "key26": "62nTyPkyxhF3JpTYJQ2xm7oPLGktnpw8NpSAxTNe9bBP9mZB4KegKYz4ShQuUrSZUVq25YZMV2gLL6K19TeY2Hsa",
  "key27": "3sDPLExhFxKxq8SCkUu8qTJqwfreXutNgvrrTST3tMcnMjm1WpSXRojU761ogQRFMC4AYokwC3Smg8Mkh5mYGtmR",
  "key28": "3kk9j6nNXj4uKrBovtvMZdHGBgW7aMTpFqJiPVPWj1TeR5bRqpKizPNVL4qsVRVUmartLGcSwMGtftgxzuVKsgvR",
  "key29": "5E2KG11EyZEipv8MfXR5ctE3P1YPS6eBJz8Hu1E6Qu8pmGuoWk6dxMXjBDNcxCmz2ouLr3bPvmFY8de4zoJmGK9R",
  "key30": "62V65HwscHtcv1oa7w84zGjZRsXc1B45aXTz4AC5jwJtCpresTQWejJ65F1eUr7XeqXXVGAtBcP9eFMQjVyQmGUa",
  "key31": "4Cxkwm6R3VSPVELByK7pvRRgem83EVCL6stTqmhKeRcX6BTtJcfMDx2d7kWbJMtQjTiQpXjgWHMfNiTf2nRqjKSh",
  "key32": "4aYUha2KqBKMtRGezPfq3meVLPC1LRLymYhnzWaP9fzQUUjdHXeGebKJA67cNtRufR7eBVvWJHmaUYUTEdioKbu7",
  "key33": "5xbydxCn4HkjizgEt7hHD9ifnoz9qsQdtGceQBpTWr13iAf3fNE1Ur1A59a6UkjXgt5JuH4qTVs1U37N6Nm2GAXw",
  "key34": "ESfeVDE8ptEMMz3crdgFKboLeX94DjVeqwjR4GUocy74DvbsPzMCNpWABqoZzgLczHv3nMMnvPvX8kTn3Xbhtmp",
  "key35": "39ZZKqpiFq6oE5Manfjasw2o8y2NkEAaUvy7igNCK64d5ZyWhXNRKz651F7emvBzAKGW1fCWe3uLVVFSR1DzWf1"
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
