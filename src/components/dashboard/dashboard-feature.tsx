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
    "27CjLGpSUScKWj2BqnS2f6hcrbH6BXqmCLgCxUq8SfzaW9dkhhAvWUQuuRKXa15xWGf1SCM8oyWDdT9sZftWNUyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oav9uaoyEzE71KugjeJQ43TfzYZ1PA5i6wbirszyLs7Fz2XXiEge6BCtzMRvLWvrizXPpwRdXVD5PMDfUfSghP9",
  "key1": "5coDEPB6eVR8ybR4d8Jqn4tjNkYv9xLtJRnMUYiryNUtnYjmLcx9YZ59SvrRE2KznmGJ1FfnvrVhXdxza6un2THm",
  "key2": "3FnzUzgtwrih3Z8QkYGcJrTDRiuqAqjLLLv2zumYUkdw5hDe5AepwsHfRZWHrMXfRwGudJsVcA9u95dVy8QAmxpC",
  "key3": "2Ejmnqq5WzpByypctdDMmNrRfzrKgSze72kbVN3Y8j83xVYcMtc5wAqf6gPxNsSDUwQHCqdvgdgPDSL4TZdQtHSJ",
  "key4": "SHUyXarNj1DmUfZUZ92WwJoPGr3fdXfBxmQsiu6uLDpA1u7iMB7CNw5CtM1xfK2Vp5eqV6XppKGfcHGYodf6Gr1",
  "key5": "2Ba14mTnpXjTp6EHPepujRNZ7h7Fd5nTFv99gHsASNqiJCf1AEoUnvQeRqwiA7buxwJCZRjDT4t1zcZNxqEtKcGN",
  "key6": "5dBZENFQkeEeKxQTU6R88uCir9HzetiaiVKdfifbiNomHiZqT7o8jfmd1qmchJpGxnbkTBdMxerUBSZvLu43Xf9j",
  "key7": "3nJp3kVVhRryw7TBhbBykiskqNfQpMdiPUYq2fbnKbSxHyeVbVj2wboe5QCTUXyNmcqYEYsqPcFiDmncAiKq3xNX",
  "key8": "5ABQ4TjwYNqShEyPDBewubGySDxvSU8bd1RFBFjFy1tQd1F3jXA7HjRJi9KKbfasyB16mPUNPhCmJDVacWy4EKTo",
  "key9": "4PzL7mhejiv95zhQHPxTmULDYCz1jhkM4MgWe37pnhBaHwT81KLLcehUr49Em6MuazdWAosKaQa1w1JCrFJLt4W",
  "key10": "hDv7zn8fmBTg6XXhP7rHNjY3XDxEpqL3hgnAgNfcxVWM12pVNfdKdwq5ec8CRk7W8QyfKgkamViuZNigkD3inV2",
  "key11": "2MBi6AQ9kxekiCxf8VmHEL84xUJU1PvBKvConK2EVDVfEnowNXKiGsTQTjU2iWkKRAMzz1UXd5fPGXNQSi4SX3kH",
  "key12": "46XMbTbj6EVAfF1sAXdZFwmMzRcbE8ENVM8yxYCQKoL7Dv2XcxCAB891VWDodEL3hPmmiKaLdNJEF5WvLTHe2NAF",
  "key13": "5uV5cRi6HTpG2NwCQVRx5sQDtnUUQBzgGz7g54m2P37TotYDT6cBhPDg8WZw7sppxaFDEvZa9sez5pY5MqAPoA29",
  "key14": "566vC7SuRdTEnEj2Xv8pQ3TCWPb8m8FbpksDHiPPnEh2fk3ttdRoDohXZhWGctu8SacoE8M9oWKGy1UbBZTwdoPR",
  "key15": "3Jq555qJwh81cVMGc2qd7GVsKjJG4wMso1nkMz5A9P4braZ5KWakqsKc7jVtebQNhUJNh736Q1KGt3ZGNE3ZheGC",
  "key16": "4byp8Bgw6uzgmVF8QFFmQkct5v6scabz5gLFbngnVzfVeNrvivMpDVG1Yjh6Ao9TWL6GZkJxgJLZTXQwBPWaHjWP",
  "key17": "4KU4hzBo9HBBL8sk4566tEDkSQoyL1XSijo5JL3q5caNCeJKNSY4i5qU7CUsst6CcKLGvLFB4ps2dyg5gMMaB9kQ",
  "key18": "4FuiVcNoLpsMiJth39c3owva3MZaXaCJioJ1zqiFG3Sb6GUH7C3VdqKHrmZLV9WesfunRD6dGyrhEZJZrnMS9Qrk",
  "key19": "4HNgUEbDJ13vPYUNTocMQyt3RzB8mM4hnnkAUSGqF2pnu1MEieb5kv81nbDMqBqBGf3EDa1SsLnz7sqnuMniQkN8",
  "key20": "4knJyRAskpiUfCffXqNrgR7kbEJFS8XNhpMBx49VfEcWAs3DwMdsCfesxhrCwtK3z8DY1EEfW6jPepo7vcrCmSMe",
  "key21": "5vfXr2yVywsHzjRAvR2M1EpJYoKXP7DxPNFuS4jjpPFBGVetfkDwcAbxLVqPJqAr7rPLNMVMnQqNppHDbAvVU2qk",
  "key22": "4fFyV3tijbQyZQMbF6iEn1nb9raG3ZQQz8m36cRxEHzRp5kfCcCBVV4yTFyVXrSeCpoMSBgUndf9Nek4ZGUyeeT3",
  "key23": "4BmL4aNHSmYJzjJLuZHgegqfyzUixpSWcGmc43UQUGMnTnMv4Ao9bDPtrnUL7m7BvcJwHipf1PFR1EK5uzZgrY4v",
  "key24": "5aEcPK8BzPNhNtfMEheHc55LDN8Xn2LtNpUnud319upa4b87jQX1ZvZqr1NM7GdUEGsyJngFz1HHtHUZGgMR72m5",
  "key25": "37vaTxq64f7Q4tBBoWcAs3kopnLNuftfcukmge69jZRDz6zhWLDQDTvkk9qBcwc9hubQo3NxCzxRzR6zsWaoKZo4",
  "key26": "KhTA5kNmqUVrqm4R9L1fpoeEqeFo5GNLZeYzMhJqM4CHXTjVTwe8hNDha21nK2WYSJiS7RMPnVoVFARTKpN3ADQ",
  "key27": "5fkWP4v9J5Xz58hs9EvD1htyvisQHgD9wTD2J1D7QyM7kYcpsFN1qVov2FhkJeBd8pbp3FAV3SMfHsR1v41e6LEU",
  "key28": "3ciPwYKSGr2uk1fTTPB5jUKuTp2ZNqKgfMV7xKeE3XZNsLSqF7McBLuQhAYU7txfV8LkT6cjPW6jqzXEHwy1mtag",
  "key29": "2HKaA95u3EQKGwzFFwJ8einH5vq95iWQZrZCKnjaAYiAKf6ihMVDGAHuh45VzePJYLBPDqf48pjWL1yBXktzy3Ux",
  "key30": "pMQjefwkeDAg98NwKiZen8LYvvHREAMffYT1kQKbeqQ12zp7FKZxtT2pNTronN1WqyE8wz3aehtahDSYo8igZBj",
  "key31": "2EFa2HtiXZsd1MoGkagk7HecvRHqbXH7zfT311ZA87hLtTvSFYiaFVKruXrAXdRwmKejp8LsctBmMSHC8qngtqPh",
  "key32": "2eXWHpUroagNHMfm4s54roJcv2951eyfJw9a44pBdfSB8Jf6CKoZ7CCnEcJSC3AZdKWy8sGDTsVwncqYRGx5hcHS",
  "key33": "KtvuzZ9fFYHhThSTUWrUHETFN7NkQGkdZQofRuWyCv1uUqGUE1osHGBRSdGKjRiBuxEi74zVBmduhEaMT16eBVV",
  "key34": "3RRNkakzJVBFCuSY1z7P5nhpA7twBDJ2Cg93jjppWW8eYDiNkHJjkJKg5nm3zyyJTUTsNEzBZ7LC3bKxEk67ZAyg",
  "key35": "5a8PYvxkvMwRW79pVkB4h57bQB9zZ1W6EVaGTXRE7yBw29Ut4Z8XzSHDskPaPHhuUEKrTUgTSr91FwtEGNzMY6Jd",
  "key36": "5r698YrTGCdifomLHqi9iDbthmy9oR92p8Ebf1uQMGX8Nq7P8WAjyhRF5uSbEzGi1WNuzRptRgd8e1mDcgTDYugn",
  "key37": "5V8iLAor8wYV8kAZj3AZBfGGFFtWZEkHdnecoNQhQMxyEj2GwAXyPMjcAvPjV83wKKzUxELj7x2qPZtsUs1r9GZr",
  "key38": "33nMuUivSy3M9u7ft4CCvCZFUwZUpBvNkaNx4CFtWKtNxR7kFMYNevZzXy1zBJvCeBWyMSvu1TXt5RnUtvit2GCU",
  "key39": "uomuCoa2UecMqkH1Nh9xXnaQQWk7pT6ApvLMhV2FSut9Qq8qSVH8Pikb5oryLmoDPocSpaq2ofHJ7BtcjmCGMVz",
  "key40": "2USUGSgHGEzQev8vU3coFTVobUMYKwD1VQ5DXnMi5wmMFjjDCLkeKWbkHCacBAeawzmas46vktQ9naXoWxL7dfWH",
  "key41": "4bLw2MNbVwu9NMC3e7JT9QYmNDmSCdNxersZwywx4kn1TNG6YAAryRUgbQvT2HLmVS7BqnLqJrKfFJpvVjWTxju2",
  "key42": "wWWQmyq4khz1VP8q9owXw8wVUMDPNZQuhDWDraTGD5PURwepyBj4vAKKPKzUQ58wg14HEwC4twjPTBwbKibtAx9",
  "key43": "585xBCrJyLLXMD3nqUYfwGT5fD9ZG54yDAAnWL1PpYAake1NtjeKRDWMnivYdmRdP4dDwhtp6VwnbJJuig5ucwxb",
  "key44": "44mgLU4MYLobScJHF44CkQDvhk28gHEqvHs5sqYcMeq4n6rtAzD71drzEgvzoJGvurjY2FiRw58rwme8pYfNaPHk",
  "key45": "3x5vLgPajWmA9LkFSp8H87h7Y7vTbRtf3uGUPMXLCVgjaLQZRpGKMwgS1jSFRdazHcGJqeutiZJJ5xLN3oAjgPb8",
  "key46": "64JPzQhhhDucDy28ukKxp8utQ7pgPmXykE7zvvgVRYMY7oMW4td62VuePygJLroZhStnXCP1gXDsXQvYXEhgpKBd",
  "key47": "4FyDWGjVhuZxkxkJivTESRctT4Cc9156S6TYgrNmGYgTZNgo5Lme1eMugMWoTEwPrcLUoqbs9khCSaMvPoMLdSwk"
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
