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
    "45MKvaVB3itCrsS32sbqtoyL8WSdxfLFB5VaaRrrApR3D5upCu1ERfa4dZkXb8g7iCi961SZAGv2dRy3WtcsnWqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoqiUtdWZ1RHDQK6kaoc3QNhE3P9ir9gt9U1GqXNERuJBN4DwNxizG7uVcT8JkqteWcRiLzYrgYmVeDKR1JtPXT",
  "key1": "3aU5f1hRvAxjG27gYKpfa1nuUYpqWfkvuuxdw8NR42pC1RxrDc2Gooc5TdtgRTHYau3E9G4b5scyoeeMTmViLAMs",
  "key2": "3nxg3irH8JnSjn3JJ89KZghFFLihPcVcWoyZqomcXUgA82WLVWuM2RT89M4hRH1ftDTZfeEoUM5oL3xv2EcxLdjJ",
  "key3": "2b2ZELrtJ32rzU8Xt2U2edsP5hUDfhxoQtpz8M3Wf5UDXK86XHMnEBzfQZgjFgPgMg5whCh9M9KGoULRUY43fZwz",
  "key4": "ANNuzn8hDaKvrdTMW6R61k4nay2CSGFyqzTLxQNtcUocLFW9LYKA8LL8Jf3Ri24Yb3jt39PfXTZKfdoMesuHwXA",
  "key5": "U6ttwEpwGThmzs1mXhndFR1BFBRzEAd4ky2WcxkBZ8jKanRsS2gasRbifCeg3DtEL1SgBfrGb5ePFjX8kRLLt7q",
  "key6": "E1wEJvgdzDUVcjVEqjsTAVjW6UAN9TYvApYaQDdeFFayNAU7ZguB1XJPKtzAPLz4w6Fs2Se2cPWeuj9khpZVYth",
  "key7": "3yAdaGs8UEsNp7BVngsYsLMTGbfAameMvYDhcKebAK9txppooCazDqhqJopuZmYU1ykNeRoWhyDT1sAzkjrk6bUC",
  "key8": "XieFYvPFCLFpDta1XJffFXK84rc1rrr7MgVea1TfNuqEV2mnPbVyg4jEHYYszN9f2yRZDueFa6AYvd5VVRKgpCE",
  "key9": "3Q9o8pZ2Xu9Au1VwepPUX1ba7mxx7MC6Yv8TNQK3XvuJvuutuonxaYeEmv5oohz4FyLT8p8E5BvZ9KZ4St4gjJKY",
  "key10": "rbyhxHJqncwm25sUpFRM9YNwRpJuLwpFNuz1EngotNu6VHtpURkoFsrrj3vDPyhQnpGk1Vay8HbCkoWm7qrtMwf",
  "key11": "ZDUy4Y5dGVzvRdJgezgorodPbbFb11spVe3Pr7RU1nCb5NYKoXi95fwzxo4L98acKFQZztgGPFRouBWXo7mS2ye",
  "key12": "3YFqwrYuuioVXnNctYWhusn6WgboZzQCKc1ctwNoPWBWAUUu8cd6uFPw9KxHZ23LubvWDpKGBnmhg4fqzverkX27",
  "key13": "KoURCGmtDeykH6suY6U1ZK8DgGi31URyJ34C16ZE9fnX7NJGRvsEf89NzkjSjkS5zPVm1k2KHV7vAqVFdF8LhQU",
  "key14": "4xjqhY6K5FxJg5iGjZtkthuL55vawrr8vQt37gGCQBGf1BCW5wpVv3MwHShkgcHSWx2tGDVASCJsdErPWs45dS6G",
  "key15": "4Se24gMge6HuMM5w7wJ9EDo3savZtGdiHjfx6V2CJgK6yzqA4KjQFAVKMbujxW5s88CewRViBDHChZmR9gULYzKi",
  "key16": "3kaWrrXpPdthSxKyMwyYSXfFT6fLdNQLvck6ism1g2qbQQFjtVhLyaHyTFTHKEGcqeMuqtWNNmVvDozzPugmiSST",
  "key17": "HvM3RpqHAyUB4fc7RG1Ah5LrdYjDLiDkLLbp17J4dXTzUEeiXn8Hz3PbaoJsLbSdSwX3nhnux8pMmbP6LMDJJVX",
  "key18": "5xa9dFjae9hpJW2wP5vuzSzaWWNhZJRiwzSrP1NmgzCmyFRjQu5QCyXv9RanJbVZvhofbb24EGzP9JvhutNTmYsb",
  "key19": "54ZGe5pxupZhjKzHYPA3iKjBGHSCSgfaJNMjfXLFkS7qSa7r7FBs72HS8kbgqFzLHy9jsreJHqeuHtcKfaUcPiXa",
  "key20": "4Y8szDbxxranD147atm1caksgVFfL5QxTtVVWTLj6Zpg1tWsE8BVNNM5omfxcnBvL1Dgor2d3nJF1JSWfoNTqP1C",
  "key21": "4VE3LoKCSB4Zktwa9d82gzEMwTtMxiyKf97Mt1YWuQsRZDcGExbadrFjR7cRCrhvromawenfdV367M9umdCyJKpf",
  "key22": "544vX9qSCuuYZzFU6UaNXQwgRWGAM8xXf7y3d3jwVhLroY6kPdnMPdCNeNzeWV2JQDBfb4Mw4rT3zuk4Q6kpgwXE",
  "key23": "2TXbnfwgT7w5X3EMzbKetAG65wiKhSLbznWboCDn6Q61F5SGeJ1ZfyHzi5kbbRV92dUwZo4Gvwu7rCtc9TVu26yb",
  "key24": "2XS92Nx3tbLrc4eRmbm2uMm96ttrmNHuT48Arn6GDBqThCpKSPRbZy8o7FSfWDLbWh8JbYkYnQ3K8k1RjxjD6YnD",
  "key25": "2v5poRSie4juPHa2fuMy867cb3BrbJswbL2p3akbURitEekfnaDEFp5Bammjn2iNJcpUqz7f9bXX3b6ueA42iTCU",
  "key26": "57Uyt1S3Y8ugprZGvDNXUJnyBik6jy9nUfDUjRwfNVobn33qm7czLVR9v1PVgXSvEhxYiLiDXu4BubDzkRsw5YKy",
  "key27": "2SGmPBKcSV9eC7NxMop9JGEabGPCHpT4Am2YLhP52t87gEmFHUUGT1FZqc6J86oMn45UigGgXTrcYYEbagSwucwN",
  "key28": "4xZYifj8qzuzbEspC2SkEnHR5LdDv2eQLAYNgkXQS77Wkd5BfG5j1kfyHNjxAHwSnZTHcnjwNqF4CSguqMiMNGeH",
  "key29": "2RnKcwuPkw8WYozA2cka8F4nTJa26vW3NsyEkbUtp6yfUhm7jewcRZfcw7ZsL8YJmNJpedd1AkwrZEzym2SmMexz",
  "key30": "2KXCmhQwo7ERtAvhe2G6ZiPcoiUE49kfJcnXiQfNtQfv4EZXxKnFTzaY8936DqXFcx6NXQhuY7nnLk3ZdrMYS4Hr",
  "key31": "4oBxdW1J3NTtSnHWmJweddVGpkw6GqjS5S3kge5YkQZPHLcLSCHasC8Tgw54aAevzyEkjj13QDiQWYiHJz87X3H2",
  "key32": "27FJFFW4QD4x4wksvGmwc1UNduzjFqe5934B4nVkCTt2225kFCyMhRaXLoSnqbFukgdj7hQk4ihu7Ro8mySVDHP2",
  "key33": "61FsHEohSW7J5pgkvNq7u6wZZ2Wpv1yqnwbA9cnsLD4miyN1PknvB1xpyQSBUZXiuyA5YZVLbzWhNR1xG4ndFcPk",
  "key34": "4RktNYmmFMuQFobSzHHAR8HXVadxCHktrRLcbzKqrzTMWwfsHGbpnu2BymgcQGQzzKv1PxxfNTndAoCQf9JU4YsP",
  "key35": "3ze19ssFyQAzu9ibVNHiNHN3ZcDS967CnRrhdNyccGcz5UGGvkyQRyYbVxvbabRYFRNWpaB3arDgsmhcaA96iWgk",
  "key36": "3RWA7cRhfAZ7gG8BbmHgAwD1kDFF3XM5tvL8oHt4a7vCmvhq3dHJocmcvLtZLcTG9YiTGc1QbsBQSF5VHGLWoV6h"
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
