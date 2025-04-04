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
    "4BCGet6ccnwFmo2SU1U2iW8BxQE8YhQKX9X9xG5ZyT1QS1TSkZ91kb7G55QEtETdMxas5sjLmPaDXCAu7hmpdznN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yaKR7GrMVJfrRPXUMLv7xrrSNVyUTFH31XWuMCTUpzGMbQQkPHPtXuFnnhroxyRxLmaCcfg15b4qtNwVaWoTzSX",
  "key1": "3e3LJyqUkRaKy1nVabXmD8c2nNenqndLvhxNhEJiuyvCCBE9x6ANsuEEPRKQkSddSfzPUCanBN69eiZfozazeaYn",
  "key2": "3WEyAB2qMgS5DGpfPVofduSJnv2UumY52vz8SnDGskoRsZ6gYWwCBUHG1mG78XNebR3m4uimczT4m1mUuSWZgSHb",
  "key3": "4FNfGMRtT5DLqtxJNWzCEs39nXkU8CbbAC6V5hwESnQDG6Jkr1NCsHt6EjZxUCdBy7Adjt6UfrNCyb5UZU2r6dZd",
  "key4": "5iUV1srfHvaFdQjVb2nqXBaAiqwh2N1z2fUFxMBKzEVG7GDXndE7QEkjygbVgHuvJoQqpTWW1hixJyfg8rMyddtM",
  "key5": "4edDQkH4wd3rQmesMp2DgMREy5e2j1NZzpmkmv8Arku7BEfboJf9tiKr6ckcUL3tVGiGxhuzkTaXXm3vgjeQxR2V",
  "key6": "4p6rjtSFNebgPJ9ZVqSmPwdty7Xqx83qmFLQLu9nL5ihGYphgfTX6Y4gGqo4fueAqNq3ca97jTbVte4HxBkqk5jT",
  "key7": "3wgWbQWCvBKfPauXNvGc8BYXng4HCG3wBWumX38XFrZ5omQx5TZj21P7jzdAuszcxEzaGJWADXGAZ6qqTyFp2LKH",
  "key8": "JmMVpgniyfSsKdCpDzZWPZxjHDFm6Spk2iSLWeFiQ9u8uKNWyhoMn5JYJEZZuSQ7yepgoQQ5kiAZ3m1cSQm9yGt",
  "key9": "4fWGJVPkKJUZy9z4UVmCn4zHHzPxceg9gN3XJZHGr9du9LgvzR2GYKRFijpVwZwnbxk7VddTVkMKcfhtv7Ehr17s",
  "key10": "2rvBUnUcyNAyi5WARdR6jAmyoQbumYi4H2GtkNGddMRsbadLP6RhnQE8uTZvDKvYiRPzLBES9jQujKn1eZmG8a2P",
  "key11": "2LxvcLjyij4oRf4E4iNXLaz7yR2mNqu8ig37LYvcN6tNtuVjjcmAsK2NWcddXSkfTTn29vRtSj98Uq7VYrCGGoLT",
  "key12": "26jzQCnMbTAgjf8chx6D1zRiVTq7UkXFRx1mKNc5w5ehvsDGzD7w6jBi7knu4DZaW9iipXVqSvjZFnMgEQmGyuJt",
  "key13": "4c5ebg89Ddu1W5cqEzqjzm8WN8iizTXaYRZiZFyWwx9NnZ7i6VLwYHkUMiCEGd1iLjVRC6n9gwYM73vVa34qYYiP",
  "key14": "3J43R2gwADQrCBGNSuQzKzqWJPLCga8C12dygJCF9KwgmGoy3o4CCgKxFZ3NjrUQ5HhWddKrDkoyTWFqeohgrb7D",
  "key15": "2BhtnGA3RFZvRpLxDVvJLmfbdpe9Kf8BvZXpHnVcDp6p3Dd8VkJj4pR7UjvHWS6jJzzgQbuYWVACX1k5XJCC3pjP",
  "key16": "BcYGZfHeQrADncjVWF1yu8AYUVbxEuPWyVmwFsjQB41WC537jZmNzdk2grCkPbgecFrTjzWEqQqN32RrvGrXUss",
  "key17": "2Jk4cfzRskMuMtfdpFcXUuPef8nZMuNQGmRpSWQrq3YYG7xkzPEeizm1JfHhsqZX2s52SCkdxo4UHBLtW2YnNgBy",
  "key18": "4DpV63VVLBHjMWEvWwCt9LfVaVL2aDJPxS1uxAmFpkc9hP1Ky1ytq6r1f736GTnrphAarmhPckDNKDmUkFWzxyuG",
  "key19": "376N976brUVD6uC9n2wUbL34cEu2CrG3BXwc49bE5gMd64wooJ2eoF9qGno7VjrokgqP7U5jMQMSPtb6YaF9Lopy",
  "key20": "zhowXQ59Rjwy4YWGdXbprBQe9SDjGqkw6Vnc6QHGuUU274VfgKUY9Gg5fLZcgEvcPo5NxmaTwsbyJoGnZhJDSSJ",
  "key21": "5ho4PXngkGjemmvCxDLXxBKYHBjsnNzTqYqs7cULm67XU7ENpb56MitdfwHe6vHUVjAypg4hT624bktPY3UwcTtA",
  "key22": "4JKhQcZURvvmyodJCU7TtuNKnqRQ1udMaM932rrVE2jzoicYQz9cPEwCSwvgYcDX2C2biGekKNEnVcKRGSwJXH7e",
  "key23": "t4AqbFmAng12iXssfX2csBkWhLzoF2aXaTCeuK2gMCvPJ2C3Nqk7KnxXmrnD61GzsXop3e5sXdsn6J5Dydb8ZeM",
  "key24": "2e2wCzE7p8rHQiRGWVHSYckVmfPBfzEfNECLP39HXbejLPjCpJSTUvrKiWpFrBBJbpHH6vxjwGLyHCHmG2VPgYFN",
  "key25": "4suKYphgSzsJDyP6GoFn4vwzN1qmKysUDH9ie6fMFhfFoAamBc4nviAxTgG2CEQGgqXtwVgN7GkWCazdGDwDKnRe",
  "key26": "2RXhbTY6q2wHKxFjbAFHp73iAFcYVuksSrUKUCbtX3pc2PhcJd5yJWBhXJWphBkoxd6KNBH6AuW34QC84kXqy68b",
  "key27": "5hRwDGb4yannba1Z79Zvc96MPzx8xLGCBrEhKrEj9PvQ9LNCSBshGZJGGPEt6kP2uBNyenQuPspGXBSupDVwfU4H",
  "key28": "2uexan1jaS647ugfVZQgkw1qZLGzmfmCVbRZHhf4AZEFL4VrxyGdUfmV5qX1tm9cjvJ4KzURALyu1wZLMUrfgH1h",
  "key29": "4w8qkUsBoUGbTX2PvHgigjExaA464DsjU7uhWLe6nvdx5YrTMkNjTvePNVtbUhCvAJG4iKqAquTysAd2RDA9nLaw",
  "key30": "voxnPzrBchE8HZcCrAiFSqGa7gKJgQJE2twpsnB5CFfDutN1CPcjSdATWhQXrMaMaytR9cytDLKW5jHQKU4RRbS",
  "key31": "4AsZnon27vVJRn4LaP49mXSSkTkLGkh48CXxqu2z1Ni3xmKovCQMXcQFfefqeRtU1tqVYmK5VgTGBLKgaD3Lpymr",
  "key32": "5h81tbYyguWqTF8aNBmW7dAjsbcfHMvEwXgNuc5zaqdFxwyB3f2fXtEVHxawgYeEuZfLeddrGZwpTSAaa3EMLJLL",
  "key33": "2BUXaG1ayicRyj34eiKDqaL3Sugo2ph6Qd8utpkbrBRixD38Rn6ckAXzwWr7Du6Dy5JMKEtQLUuhoFcAVGWVPKA7",
  "key34": "3AndSVTWA4oFJtE7cfxV41Xv8r6kKGMejC5rhGXf5wMGP2Ru5F533GSouaonMhfkBjBtX1228epy9a6hAsgUWAxX",
  "key35": "34Ck2JX9vWhfaPYP5y4QQ7UWH9GebcBZwrzYQrAkinRpuyvFRceVdpuBphPpQBuWZthbiMACMj1BeDHavzSpETNs",
  "key36": "4xohpc7iWMWrcnmyqk9bdFXJkq53EkiXQq4aeQsxZZwQVj4Ys7nxQV7FBsohdBvHgtT8sbWo2VHKaEkgjP7vScwJ",
  "key37": "2K8LmrJryGpzbdDZUfqDtxAEcav5iRYfsYyt4NDnPWuU95gXUX8UWMXkPCDiu7xFJv5HH7stXeCtALZ7CZevNYvR",
  "key38": "2AqSyFeGs7BuHGTiYR6g9zC3XvRB1t6EftT2QKRMWCwCbknLvvb8jvbBzYV1nNrNpYJiJ6QDn1ad26vWufeDtkt3",
  "key39": "2gkBWvPyHNLfd1JcGimTXA6jJbBDfFGwiqgA4tWgKhX2771SfBvqHtuqXj6Cnv2C9s8474UW86zWhaK1NX2mWSKj",
  "key40": "4WJbngLEHJXxbD2mBUqFgNWDcUKm9YXVDo5gSJaEi9USDcGbtr4iaSriJZuq99kob1DKfZXKUoizBpKJvuCYHT2D",
  "key41": "4oaascL9jjKHyfLkmQQDJmYiCz82Ebdh8xp4B89ZcvZp824v427xYHXNs1cSixVfqErHK6WRHvLhTareub9M4tUm",
  "key42": "5mPUMmkVkqY1odkUSx8JtDPd7cHqFrjvZg5siSvgMEqzwNVyEpgFbZCSPpoGUnXt81bgtUv3D8TYunp6qyFr2mGC",
  "key43": "41tTEanDxucgGqKCrjdw8MQ4H8i63Qbtchq2VvuR6CNzNYSq31br8pV5EtZ9Fb9eKAvy6pnSCJ6Rer3jwWGCiQw8",
  "key44": "sdNPnPFNFHBHudrNGy2D1kN1dx3CzDY5HwV88f5ihedFdrNFRZ7nhh1wYShzXJC8V7CynMptGfafKetNvbw4GM5"
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
