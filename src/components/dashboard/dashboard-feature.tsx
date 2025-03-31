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
    "5i9v1BWnegteqxsb2iGAgKu1rL5gaT1fNconF7U2EQsda3XhcZRKfDXmk1EMcQQZTkQsPUxPQQc3tBX5xw4LctDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMZxZizSdt2hykwkHzWoJUQpJXX5zDjLt89unBXnz8vF5FUCFUc7AefpV4xAzjjWWkdWAk5PtEYN6w3nNiUTbMC",
  "key1": "3vfHopgh9M2Pvjq9HMEb3ywFzDTWVToVXs7GcT16zXoAqu4gF1MFYQQWvbBg7iVe9N46jm8uhKd7D3v2ufruVjam",
  "key2": "5N7AXdWwJYVT82tT6ksNQTSabwECsMJRLaHs1V9LHkCdZebY9Sp9JqQdxaWTSziJCGVZrHESwMVwASjXihneCDxp",
  "key3": "2QsoUvrrsuX68dnS44MZ7bW6UE98oiv9UDFJDK9noW5vmb3KYyfndHbDT8RnD2B3VP7sz7fKjDGHLNLLkHr94ffA",
  "key4": "UqWyhUe2WifDFQoFCYTU2VM6ycami8xYfJ8EX9N2MVFrqiYv4EFosGzD8DP58TwdUXca96zf8qjw5eGMffEWagF",
  "key5": "kYpnQt5REaJtZBX1iyV7nYsaYh4yb6pyvuuaZroJvCcd7dxEqWFkNHH7CfyQQ1X13htnEbAUJXJuQqSfPicsYtn",
  "key6": "4Ybii8xR3ebyXeJ9cp2chznYGJzJUPtVVdyTRJWaFKuUqF3Bm3ZYhytb2DoB89rkobLAN7yP4KP5N211hLL9wkRD",
  "key7": "5FuSfmZQW7WhMTMyrPLzEz1T3LRxx2PzAnM2WFRSY4daKj314c2jsoXhzmzRJtZHzj9gnaXSV81zVxNLV69w9QFU",
  "key8": "ovcCeXTjnsFDuTzsSaqaAPjk9EThUsB5Z8d9PnMFwBCd7JQU6UC7RtkoukHRWRx18btgjWo1ihSgnrjUM5PmhKu",
  "key9": "32rm4Tucf6SmrQyRPAgms3jBLPUouTSqaB8mysUL4wawavYe7nQqj5K59KRNpgVAtN9qRW1Bdep4wVp5h3iVF9Kn",
  "key10": "4BjZm7SNwLBdkcpmG5cRvgMt3hmRoHqyfNmyMrc22nmJoDKtK9Ki6Yje2eu4AoqCbjcNqcpHFLHryDfLCkVUZiKX",
  "key11": "5kWnMjq5Mye6s1JcBerN8osVxnQNgxky8WHCLyKqud3QijtE1xPXh453kicr5izpFArtHqd785Zc1CkMAnnQcXHy",
  "key12": "3vKXu2TcAi6Un2FDQcuhPp5cLrXJEjtTb6YMB1KUHfHmReaujtxAETMAtHQ5GJfmRmGtqKquwrnEmU27cmS8Nf6t",
  "key13": "4LK1ZbHL3r5Y4Vi4sRwVBeegYL5exSw5zR2NSkY6iWNbjx1yThN7FoYPzfjVy8WKzK9fsBMMebpdyN2vNvLS8BUz",
  "key14": "3dMWiUJoEndHUWUeKaBovxkAzQziRNcwJ5Ss3Aqm3U4R1sCQHG7koP8jpNb7XJ3mumVxwECXXoUwpsb3rTGQAvJb",
  "key15": "2NW7Z8EkXfqRHeNkQkLumwSUQaz5i5xAPEDp5kG8cro5iiE8J2c69RESmYRnKqk1rP7Hi3hZjbiTsB5QnTx4Va9M",
  "key16": "2BSD2mq8ddpqyZNdgoERebn6HJ4pFCCcRQnMsuC2TAZ8T7ArMx7u9rafkpKKshxmNvn9TWUQ94psebkfD72YirtE",
  "key17": "4wyPvPE68umBDsopaD3UcKUPUw7brpsodmvFsk9SXpaL16vpQaFgWR6Hqx7P4Uwk6XjeyKMCjKVZedgRxHg6fVyX",
  "key18": "3KueNYneghiSi9gjRuSuVFMJ8mGdG7ZmyLYFk2EC1xZ14jnZUnxuMC4pyx9QdppKGLfdj5nVH2dshCFcNey9gX1m",
  "key19": "4Fd421MmPYyzRKrsUbNU5HPyDbKpi6dSsCWVA9Mn4N2RV4oPgTknr2ys2omRGYMGfnuZtgeBBagNeSCfch5XwcmD",
  "key20": "5T2FPVDovKH7FWmUP4d3AZT9TYBib9TYfvFsbkV7N3xUma7Cw5XMdsDnyTzg1Q16oCazUCesCTPYnnkqvzc2r6gK",
  "key21": "2jGDrDG6tCG7u5nB1DH7TJkyULECxsuDWZNxd9Ujk3yWQHfnYwk7AVJHTUBPspnxqr974anJgZPYWZPEZztJwDo7",
  "key22": "3z9Jw2KFXsn7C4BPYaebDtx4yGuck6Fd4xgpf5VK4a4U5GyeJwU5p9MyttT2mWwW2UGzBdoFo61ArtCM7wK3tX2W",
  "key23": "63YjxwoZnKjXrnBmF8aNQ5GnXikaDad1XK6gVjWLrzTDtQtMaubkCsKoY8JrL58S5JDVW4XsX5x4XouHiqT67aVu",
  "key24": "4JTCKsRy5aMxwAwiJGHckSGaJdVai3dqWJUk56JZZXwTEw4JUr92dekmw7AAEPoVwjCyJ5hcQEZcB3ZRPzaSMPsk",
  "key25": "MWuzkRepKJkaj8whsYbdkkGMZgrQhtt3QQ5dsUDHGfjgrTA2Nt9ss8Jgoky7JZhiGrUr5AwUXo5JicqSnEppLhB",
  "key26": "5KitgEMZiixh3Db9p2QZysFVf7MP2C7mAtvjDUEVnUHXCjCF4Sqfsb6P6YE9bLHy8cSBm9g9n8KJ8ppokoz1RTfz",
  "key27": "Rgfhj1vrigbhJxmvTVw2ZhQM1YWuZMVCpUUa9m1dSPMtn8bQ7AvvDWAh4fJHVewaUT8U399KxBLZNojAoSYVxVU",
  "key28": "PEYLTiCJABhTjnyTsC3AYyje7f8A8naDMhmqaMEoQ11NVyy3DTYDQvZJ9YdB6j2LXYUXPHmCjzpVq5L7R3HTymV",
  "key29": "3WurNdEcXpCr7W9jvsWg1CmBN3wSDuquXb3HDd89RTgTEgpHvFzhMAxpc8USVAksLiee5bvKy5eCmahuh5tcXd5i",
  "key30": "4vMueSFrfmJoKJJzud5TLZV1Ph3zeFTFkQdwHyxLibN3dVgj9PiBzD7JswEiwZ5Zr4Engu1EYphV6FtUuKwZKcvQ",
  "key31": "28SuzpuYqGNCFC6BPLEUgBqptmUiSP5d6ZcxTfKJ1V41N9idQGgziWbkXhgCfS1hKYj9WLsMsRbbBtN6RwA7jpgz",
  "key32": "5Mvbx1rmozF94nH2A6hn1CMBjh6gwQxEj8CmtWodGXyeKnqfwRKKaAsDrfvpew1QdfAi3YPtevw13rDwEjnR4kyE",
  "key33": "34QHikk7aRdcXPevcuf7oQDbK4NcWwRMSVDDuHXwBXTFUg87JUV9wEvamv3xSeSKDjjhKcD9eMrL8gDEvHr7n4gs",
  "key34": "2HwQGxGJTPAc8xd9L5bP1jWASEdhLnVHBe7VTk29HUyRSUSC9Wo2BMpy9nYwKFpGBRis8iscaukkaMJRW9yvVMou",
  "key35": "1MG8KMbVcuFz8Q1QSHoomHfw4BaQF7wL5vkPxRjhV5wtry1VctNqzG8aiRBBxhFDStmHgy18o2KneKw4tC6e6uA",
  "key36": "Hb6hXZpgVMRqj8PsCrZRuxCasUAeggHjLtXPbykwQeYTbjEUJKq2h9UVyrxEvYCEvPawL11saPW9T8Tppqd6J4Z",
  "key37": "AzRG8VzmLRz1ZkD3gtGoPe5EP6JnPNb1WHxLYmdGqDV6sWEcC6g5gBH9vvXFLa2cL1G9hMijw2m5ggn6JLwk2dB",
  "key38": "2tyxEGiTcSyra8NgFrbkNDhBjFf24AWF8sR3HtKcmPBUc5XfNrvV67VTfTxMvw9uQZKnVAMQiuQJC4DEFcvqQnfZ",
  "key39": "6vA7WuVJxW4ZjdhNo4eWZH38QE71jCBuDrUwsPa6aRyTwbaJwFopbrS9d3RBovKFgCnR7zKhWn7arkeQ5KA7Zy7",
  "key40": "2Xf53pTd2smtBXaeCKQPPo1Zm2naTSijaEpURy5ZJE9ZtoFSmZfAzzVB2t5XEVp44BTLcnN7mUd4GaDbPtZ5C1Ja",
  "key41": "2pUstJFFkFY9xg395wKCX37PDPvQQh2j7dmxB94XpH8fwD64ykQdrx8Z6HNoZzh7T73m92JZ1sQ4PANckcdxb6E5",
  "key42": "2ANxpvhuGivaBCgxErtQnCGkkC1eWBWRZkckWKveXsJ7qpSeGnNDsBT3uLzbaFzBVTN4FUuJKxECrsai55DhwWLW"
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
