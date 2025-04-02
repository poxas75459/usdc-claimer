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
    "3ULgKY7MFx5puz1QFkSepDXvsUSRGLq8722fkNkxhusBkGZVUjTKCP3TbT4hPy9mLNonUxYjMeADgU2ytbwm5a2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EXTKiUbiy4b1A5jhNDn5RwrwdFvePpEdeu2FU3MQEzLvTR12oiHSxmbNXfAxBeV44bUjJsMgrht7vYTSZ8DShet",
  "key1": "UBzxHMSZt9DJXe8W77TEYKxQmUnfX9fg3ypWd2qX6rH7urcAiqEyvqgbVHfvJod3i6xeKsv2UCnQ4eJfz4ssSiy",
  "key2": "4XfkNEaQ4HJcbhtTykBdspqPLERSzUozWwf4Hh3rH6WkYUgkS5HXzyUd9cXsc7sb1FwGMvXENTUpYL1BFtRKM1dy",
  "key3": "265P2pb6WbXKdWmuiYX4MB9sE6cukgZavFieFknVeUaRaeaXfzWDNpSp2mKWPqA2tiKZMqYppjUKm1AT1THKh6tf",
  "key4": "3QLfCqp6pbxM4AcHwjkMERiDi2NYGTNSxgCMeTPW1bfSWdgA9kfnc88kmM9aN9ViJKNWJAx3RYfsbXKSf3LeszYh",
  "key5": "56Pi7f2Y1L3L55KvJbxH3a6vzrmbXeUKp61VhjTdbsmvM5u1TL7qUaqZp2XsmivNzrAZ2EDGT71DwspVDkhakTeW",
  "key6": "2bWsCZjHoaLvA3hHaDXqM7CFyAP6Mx9ocDvU2giXq32fM4WFjvv9qpacQgEdPJsUzpP4SvQcoRHEjoKQT15gVsNF",
  "key7": "4UX6r8Lskzqc9mceQvV4U8H1gi6Xb5gxhZzS2odG9zxmLEdP3rXgyhu7i5mBCmrUbBmykSnUri3S1oiMEBxNYwEM",
  "key8": "4qseQzR3vE5d8DUDMNtQcGUv3cWe4AwUkniJcyxbhX1tFm7hdoNe7UynELmupdeGSUgWtuxYWDJMKaYUCsRgFge5",
  "key9": "TFaKJzGsnC4puBa78VGkZ6dFcyhCBN3FPuCwf6cFFpv3B9SnSuT8UqVCUqfzeTUwsWJTUgQsVHjAPqyZyb6nmeN",
  "key10": "4FBAQLxm2sRp9GpC4Hq8gntf1BNn92x83uS1TSLcN3jvcHLwEBCF1g5DvDRSHXEguCk3YBt5grxeHYTUdZEMBWsm",
  "key11": "34yzDQRfsDogLxFiQsGB3in31drAKrThu9RqBoKeNy4FCucNNNk4hMkbpsUnMEYW7DDXW79W2AXJGrSjj8c1eqbe",
  "key12": "5c4CVvihUA5GDnPYzih3tvYXu5dJ12siV6YwhEAF5nXuoaPFvYPM3nrmQqQTXNgyxn74rL4Tntqota78vF4vfsc5",
  "key13": "Mme39bNPy9s2Q38dBBkK5wtX7D7PCoa21U9N2w4PT8yLgcWoJ59cSLRKErmWojiKjuEfvuzFMN25FscDqWeYJuC",
  "key14": "5JkEXXeBYVcqyrjHofuey8e1XMqnw6654WGwVDw7GiK4qmQA7nUyovMKaM1shYFNxjEPkiCCJ6XfhYr6nCtA9mv8",
  "key15": "sa4KoRMbVsEK3wgoESdHCMTkGR9TLe6spXzwpEzYSMGL4wnhAArBbxSDaY1ahVQYKn5fLxCF3JMnen78MHF61HR",
  "key16": "4UgdLQ63bHit8MyyRrBMgxS3zqpBLfeDQwvKRM3oSshY2EUgi33SHkUvTN97XXNz1teyjs9ZmbaqWG9ejmjCrn46",
  "key17": "4kMi2PTjvpWgZhstCNjTAqSfTfQdCo5v7y1boEKHc3gsu871NcLbjZHKDnxT1YZK3BkhWUzKYV61E2mHWeZyXeAv",
  "key18": "45bmcbsn5APvpufuqFWRhnRf9kFxVHxhWCfFGR9zaUYv4UsLtPoe9KBmMmFTUq9yTKpiMGBhaVFXF2Tg6mGB3wEk",
  "key19": "4aFwgqkv2i8RjpfUNFrJVC71XWFiEakkbz6kPZ7kowPnMVB4QyuhQwzFe3NxhJCv64oXxMdvPk8e6s5VMH5fPrBG",
  "key20": "MTCn8MaJciuDGeiWjdF5VqMChtM5qqiQkUUiCrf3uDUzbwWPf7yX5JJtMHmmj8H4hBnnZWYt1Z1SA9oX8g3uUfj",
  "key21": "2ggCQVcuFwjcnqAq7yaGEmno2LHLTcj5kNHs4Lh4Fhh95mUggGbBJZxkq5rCWLLM4qWeoAkLAaVpW431wM786NgB",
  "key22": "5886oPVFwW5ssfCWAgVcQ3NUjfYGHb75FDFBp826monZJXGnxxikvyKjdntvY3hqADdWwGcEAKDjQ4Fp36E7fbCG",
  "key23": "5MMbK7K5bHLTYqiE2NBCHj2sUm5RwxE9QXv9doZCYXXqhUptDmsE8C3BNq2cqWvqsVqv8KrUv7V1gEXuBks6KAjg",
  "key24": "2VRQvwKMk17xv9cqCH2VJHR8M5zskyjq5BAyrKN2qxvXJPQKz4YRC9PxmnLjeNWrSJbiiebUE25jh2MUgGAPXh8w",
  "key25": "4APESGSsRmaCTXBKiFVFQxbAK4oCU7NeGYysziDBWXPSCCTQWFEr2GwxBHJG3PmYNRRXujjGpvFaRYFEyq9PaCKY",
  "key26": "5HKo3Tq8nNAG1KPBfheKCXd8GMAGnW4QYoAhbcfAphfzJbvXQ27JBcnFshe5sZ6rhH8CgRvTgDNMqVHjgzwL3KxZ",
  "key27": "5cGaxc7WiqRnVAWMid4cXv7GHyszxg24nMSsvAcgtg2afN5cJiWekU2eHEcHvopqkrLByuVJRon3tsyfQdtrvSPw",
  "key28": "4cpANRvtPSSZJKT3rAhCD66kEzrRmfDgRouLjANtHm4PzHM5uAqNRSMVuWvPuuSPvTygeScxuX5kjj7agqPDMiay",
  "key29": "364KLyXYxNFMf3pBWRAMPkGevZ2xrVkevEcvBSJKeJGpgjbMJrFY2qwXHWoBB8yfXzAtFfuUtdXojxiqojATC2t4",
  "key30": "5RDbSK42Fnkx9xeysS2eNHDsAqDHR5HQzyHbrrabDuMbUGR89LygecAdfSs58ycE1i6Nn4qboWP7Dg1Z1pXYBm6V",
  "key31": "65rUBqqG6Pq6is8d1ZcvYToMsTboYbUBVrEcdNzgkG6eDvYnTxWhHtVpENiUjcipbiGPR9mcDe29XBdU8M7CqBf8",
  "key32": "38Jou2he1ioR6PKSGZh5ACvTYfKgdQ3G57vhHMTHKEmosxQhorA2mvPQWMnWttbazubpAtotrPDyeJKopbTHproS",
  "key33": "L546DGy1MpkHUZ2ojD2dFaZePN6xhwFTCpYFQ35s89LLW1GP35NytRns62QVazukkA1RA3AyAcgRuVHsj5rENVu",
  "key34": "4WP6D3t7gVxLzbS2aRReSdVfKJeakR2x3gTzrL3emx2f2sBHy4v6BbAcwY46mYDmQZ3wkwbWtgt72qUHT3njcteV",
  "key35": "5NoLByLHkWuBkmTtfYtN9FqSN5nGYyfkRbY5VRBwwZa5p2GES7aHPgiApAxL64CMc61JJqS3Vc1QwnJz5b1AFgig",
  "key36": "ZWKUnEBUdyFxa2R1uGV11QgqgPAVgTpdCyYMdkbPKbyuJLqV2pdGjFYLc1BGspkMwffWq1xpYWW4UGHghFaQzPe",
  "key37": "3VCKvNaBqmD83ysMKhTAkrEZm4tnKpDzGPrkw2bYYjHvhZGdsyJYiA3WgJMWCVbH7vmdfBgHyjTuMKKG8bFsihtc",
  "key38": "4VAVNdKdeUz3vzXuybwnkUBQ6MYK6WGddX3osvtyEuS7zhErGuEyvS7r6wLZ2QDBtBQ56ksibHPrGY3eUAYXSGhL",
  "key39": "4J6f8vhyMLvUmBg7KvwhTqGksimqdmusg6LgsSDV3Np9CdpqUYb2UpjdPNhgLmmBXqcLAwgEsQXZG6djnwhNs5Jj",
  "key40": "5s1pihtHXwxs9qCtwi2XWzkunrNZuFDNAFwcgPzpzskWzqbkivtFE55kAgaMJKW3Wvpa1F73E3nem3imvotrFx5P",
  "key41": "tdwg5zaGaEJYURxuMN2qHZn6snxz4rPtrPvzZMsoKcFiEWyD7a1pW81MhejuociRuf7HvUVLuJ5tKNfZamD8aRY",
  "key42": "5wUpzjh2tRrLGBxAK7zQZcNFGeqa8Mpvxx5Stb42NZpKNmvRV5MwHsox2H4mXwU2iMvcgZPUgUbJpErNy1YQ6AXr",
  "key43": "2AYBjvfYd3hs1G4TtfR4aedsR6vciTtVwAAABRB3vH5Akk8doJyo4Nr9AmLCis2Qt4NupotazQhL9jTyoPssQm7j",
  "key44": "3kft7DH9t6uYwwmuJvmaWhyCqjpw34wYxqmq7pws25zm5x1KPyGMpqhfhn832ypGqPY6H374c1fGRkaaNWyBZYAy",
  "key45": "3BX6pzaSu76fH2xMdr1gAh7qXj9YY4HoAM39ig38cSnrqiBk53dZPETKWdcxAtvTrR7PmM9peNRsY5KVyQ21AQj2",
  "key46": "2Ldn9eXN7jFYC9WEnjZpof9pnUL286uhhEUP7xq7ZDZ4SuVPu59xQSZpb6T8m3zzTVKkKyNPF8stshQSM9hJ8hDy",
  "key47": "2pGePS3TX3gzgK9aUayQ8WxkUd8xLoxR3ivgwGswJ8VmeToWAkxr6mwLGKoJZNrSwYeLiUNyZ1GYLQ2XVfduN932",
  "key48": "2Eu1JEywKUFu2xN94fphxfsbeChGYre6NbuCbjirRZeZAxbRs49arjD6NUvPE5SJWYb3eJ3CUuHcvNeWxHeS2KpF"
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
