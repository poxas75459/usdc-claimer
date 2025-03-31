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
    "3XqJhg53i1ykzoS6tcxkbSV6oRwCv3LmFUYf6DsuQiudJ6bPqLQKbwcoqnWqPKeaCDArSyUYrR1kY13Gad54ZsB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BoJtDD7A6vqAqm5ZL7B7cRrxnSJHQLBNaYtM3CDjtsiTwLzNxEr4pv4ncdo6UYwucehpFnQS78mDHaKbuScXoLP",
  "key1": "4QrMjBnTRTYFmjuea9XQYFt1ejJEQCNKfxWNSMUGRTGm6TcaC8DN7vxvkovAmeRg8ugeR5LqiBPBMBb1PXaaHyAy",
  "key2": "45xW3wtfBYeBjsM5jnji6zmwbX4P8hZFRjoL3C2iVBvUw7YfHSaCx9A7b3ef3oeUesFQ6rm3wmjPax6WeGAn3KBR",
  "key3": "zw5g7a1UM1ph3CgV4cqMsjnEPrnfwVL4A1TEnymNZdt1qTyvAVq71fi9wPvovEScyTFc9X8TNrCFHASDAqeciLU",
  "key4": "4uT5S8x9YF5tbQsSVcJf6AXxQeXEVnBqTi3E2Rvx62ujnbTw6UhXTZdwiSe2cTmWkycUp8XKsJBtQx3aJJZT5pNi",
  "key5": "mJy3meYD3FQEQ8QMCPG8j9PLJY5iEpVeTWQbAw9PzUP1jWykBDc9ehjMvVTCK5ZKKtAExQsbp5xg3Md25Wehtrk",
  "key6": "5DRudSks9GQA7jBEcTBTczLoD7oq9KQudRXwj9NzVAaxFEYyXFZPAEtyJqsf6Ar5aUbbWWEChkrtRcZVhEkLQiCm",
  "key7": "5EjrPMbTxfyqesHRJz3YNycNViPDaLAQJYEEw3JB8SGKPDRSL9HVbaE76BbSb8xXH3dtkeiFDCdpijQ82jQnZpWr",
  "key8": "5CTDL4ZnZqRnkuR3BKgy1cVKBgLAdSmn6wnUo1eYM6DBcoW9N3bPJCbnPwAFArVFsdYHRSSzg3LmWU1fum2kk2Co",
  "key9": "5w3PAzQhRcWyij5rFUwqz2yN8YJQQCYDBP2wAHUJYFx2cT6KuRcMvSYSeEoJrXxTvifKeABsZEXUmVCGTHpCKaqS",
  "key10": "5hbwsH9syjZdNgQb5JiWbVF2NZUN45nk8hGzfgRAPLMSwjZdWZMEgn9TvFai2Fe5UJdRUk2isn6qD14McA5aWuz4",
  "key11": "BiV83rbqgkxDYW9MgWHhcCssWmcYJxR42wV7JVoc5CvvdzSMoAXbEr8xWhytfa6azATa23PF8fDH2cGWFe4vPM5",
  "key12": "65Lws8XC61noSHsc4CS3w9mPTdMFKhN5WgBgkMHiXj86AqWSBhAAVYdikHt7h1k51WzPVEpzE5WDz2dYeE21KFcr",
  "key13": "5B8fy3SWZV7oECpBRD7VBTfqQ7vJ4f5opLNhJsvoCuZ9edNdy8zPGYeBUF9Y7zCcoEM6giMRaLNyiAwJSHv4eRJN",
  "key14": "3k1ivHs4iBfkCaeHSEUb8vtujUBMUgjGrRqP4FqQZQShGDMwGNd9nBSTc7K7Anxyx4uwB5KvSk3FsQxCv6PeWoHY",
  "key15": "5EQpFAipeFTBMeZkddH7yQ54UbDqAJdSpr15irJiGKX6MDhVMTZ3F8oR9oHUVbZom7QPJ1GVmeFsi2tFSCjzg5tj",
  "key16": "4n5uakJurd3phpeKKNWGgddChDXt4Ue9FN42sdSWs3YZr8cfJqfCcFhJhC4h35hCUxdNodaZtdfwL5X8d9J55XPh",
  "key17": "5VNXmJSTpvWXnqkqLtTp12CfxRB4WFM3Sidp37FedTxiYE7sRrsJ9DBsDZSegQ59kvjRZDu51X7ExApAGkmct2Nr",
  "key18": "4FpV3DdQ5L2Zd7CWJLLJycdogGPRxvvEexVeKGACnVrcetFAhZto4EERZAFyQpubpeBuFbrgKN631MKPeJaraAgi",
  "key19": "37huF8ihpUrTeciUqfJ3hzwv2B4rb4vygxMaWuV4hVG1BGFZ6sPbaRmretWQYSNcPrn14Hm3QBFy32nZZBRQjMt7",
  "key20": "PV4ockUoiFb4H2NXuh2q52ENKUcmSa54W6iF2NuFENg7g7Xzg1JMTEf8xiwLYRRywrHM2vwxZRQBQ7fMGTu23bJ",
  "key21": "57ZitBjnN4QkzLon6b9cLyK5ZcStiwdMHMfWmEWngT9oAMS7Sgu1HGVSBZ3HiERpGZEHeDAbfggSkWVQxJ7gscQA",
  "key22": "N3AdWnm6KyDjHERnHMtyq1bemoFLRycgmxKxrHkJwoi1jjvLrKPc7Htapt3xDtPx6Ee8GLYHnPoYak8qi48WNLv",
  "key23": "5rintHJEgFKjBsPTN7VrWuTxdwdKFEZaf2dcZ3Th1ynQmhaifVF77DQ2Tx29DaXiXKFQjXypBHJbAQdr1wLnq3ya",
  "key24": "61QmiQ6UDrDxC8Ff6Ld6XL9WavajuGRAjupMex3HaG7Czj8bL8UJ7gHFrnPMAeiT3XoWsn5foBsfbqxosf68veGe",
  "key25": "5RhKqjnW3xc69znSauxMeJ9ed5t83929AfGYjcwPUKsqTw5qzPnEqpSBxoWYjmG72oAdKsHTwWbKpBtEFkX2G1hx",
  "key26": "m9uipKM4pupqpwJ9hRr4kxAcUVn9TyYc3PvfbHMUk6b2VyfQwsN56WVxULZ5ufUeAuaN8SPHDwZrbJEhbqYVQ8r",
  "key27": "3KgwKM2PwkGMZvykefY1L7XqvBaARBLDkroET1mcvBAmaXeSD9Syf7E2kBXfXkh5RetwkBFTqRJJs4gEMdQ9KCnH",
  "key28": "4YdJSe4M5ybp4w4SBdrNDJPQGS6sGEbDRmyKJJiaBdCa72YXNvVPXHPz1WSqfGsYo9YJRdGuEPqkJGTSvrgUKMsY",
  "key29": "3kkNYmuuWWpc4nTdMHFECbHMNCg7gi5fkDVyT7SrbdYYzfoSFDSphu756uCA7heaQdNsmAEekxrnoDE14w8frndo",
  "key30": "2TRXHVE9P8KT8EnX5yqNnrmtJ3Hqj2yynhXr2D9h2WqvRCiEXqgqJAMVxtWUWGi8aJhY2tMCWwhcVabwSygxcPDn",
  "key31": "ktwnBxLwM6iM5PbmZCnbCP3njt4QrUNWYfMD1vhhufHfVmLmotVzXhRJcqPNo3fMAVREH6J3BFnErewJWbmdwTD",
  "key32": "2iLHa36rzg9sBGdHNELBseMu2QX8ysBhwa9j6qXbyeXx43yXVkj2KXnwpK7MvN6eaDhXmhpEVmaQcXxcY8sXA8pS",
  "key33": "GddxmNM5bjPF1dLpvaYNdfiJF9FzNWngaktbwBfzKEh2J3bvgPbqqb7VtK3UXKhzmM34GXWRnNRt1pvYp8V6a7K",
  "key34": "4LYrvV4XKot2ZJJWnN2i9RgvQUwjddXCbwXQ5xwrncUfK4FHRCvH1Bjp6R7HwDfoQX9MgeTjYbfQb6jDG7kxqAqT",
  "key35": "2YXGcbFEDPjFeecxG4EJVrd5HLJhCUaeqcQnotrWgXTfmG9qdNmjuZgqwr4Yz8q1u79pwnxCYsghhvcAXHgCEq4m",
  "key36": "4tgABuTah4aEzeLwGgdUVuzHMbLgUVtW2PXNbM6dvGn1qTbX8oAn5rfqj2J48y7uCKfnANi9MaZAaoWFYLBGZjb3",
  "key37": "5NgreyFEGt1bhpnL7bM9JDwoYPcUF9CPZuDpgbw2JiaXcNyGFS6Ma1KhEvk91KHW1kdRvitR4vVfvw4oKUBNmgqU",
  "key38": "2PAJ5ESeTCeMBhHA9iZN5jvDGjeyiHvfoZvKKk9ojMmTuAfSoUoq2tkkgzrdtC7ggtYThfbP7mfe3GgHtXu1fqxV",
  "key39": "2WZhVPWwRgm4S41Jb24WBQMHbMX73usY3cunhyybRtff4uNZzYaYYMDDYNPjzqVMna72rpaqMQGcTs9nsAKc2sEr",
  "key40": "5jT66cnXQ8GGJRJs623ns511DZi3xSMUCBBnHJ7P6rRYys3AXR1f3Cyci3CzSMrv98kpjYReKte5Cafv4hTgTwRM",
  "key41": "5C2inpwEc9ZfScwp9M8MKhgPUNdttawdC2khsYB7RLfiVeFZS9bh2KJvX8yDgkivZC727d69U4Kvcg3Cd3M3F9rj",
  "key42": "2DXpKjHsbnQ5z8dsEyfyvJx8z6eVb1PxoiDrrHpHrEDFvmDX13JnFEsxfdQ9dx8XcVz95ZTPbwurkMuUjD9rL3db",
  "key43": "23ffAnMXDhu5UBw7GVcUHhshzDpMoqfsTRfLUZXZ2YPMeCxreGCSLPZCxCANLntLwcrRePUN2MJg8yQ4VTQ1xBmA",
  "key44": "3fTvRG8JipKDBKTLxzee1CeVQ23X8NmhxaJh2MePdvVdSyqdwiBCJTqcpj2w5WDVa2gggR6vEqd6rrhjB5RLHYpH",
  "key45": "5HS87M36yjd3uZCggDPeHngFMioeZmegpctf6pzRC4PcvPP73FpYoFNxs5eyhTk9u7AiYgSinJbnbejSzCLFpNkt"
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
