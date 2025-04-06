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
    "2RwmvtNCXAiNWDyKM82ksEo2gX1HXJbVKe1aXUBorb65oDfYmhgTHMyo9tpEMRxh5p9rGmw9XjbXLZ9sxuT8LLa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDa6QSJdaoc2KZoFytrT1i9DW46PFdfziCMZUKhRfo3qVAWyv2a7W7khGPRFRdW2DH2s43rSG3JGNNcpV9QfNwZ",
  "key1": "2TefUbR4hh1SwsHqJ5rv3Q3K3rp6L44jT4w733cNBAvNfvWzP7NyxFf24Cy4h6ytWTQwYtcirohVTKzGN7WZfbC7",
  "key2": "3YxJkYhKNpaeNL5dBgX96sraKP4D4QabL3BNexYGtEqrH3VJZpbc1pzupk2JdqLzkNftPGtHrQ8fMKpqKCEejFeh",
  "key3": "35csRDpEUZZp2myv8ArhfPxUzwRe3AbP5mZKwp4AMiPbcc59zXgyXhp95SYNy1geXWcp4Tm3AcUtfHz3BmTeh3x7",
  "key4": "ioCpdaRK1EtLe7wHVLhsSdBZGeWTfLYnkHCdVNthpsyNzXGzbvqwQkfZ7pB9XKa73TBGcXxTzco4srT5F1oVoks",
  "key5": "4aTiz4tsZZDs8eSDSuc4sUW9s4ZadJyJSPNbQ3zhGv6tBYAhujCBQHYGygWr1VkB5axkJd8kmLfjjCxechWZZ3YN",
  "key6": "4jE5EH17Q6aPyCMXRKi6VLpYrcaz7C6XsUnKCrSNsQNhAkfZCDg5SaXmAvMXXQUR4ovcgJUSVW5cYwdn9Q3Usr8b",
  "key7": "3cpgS5VYCVZ9TBofYMHdpLFqDqne8KbpiGSZYBKLm9WMFtWDzrw7kMd2KNNRB2A9QrJvyEprYxbhvQ4cNxRZ73MP",
  "key8": "3BNZ1gd8pdJRa86qS3MXA1iNHc6CFnbPGRKy8MD1JNvFeVhewq7ZbyPQnEpmoYvVgSYQNbuEg8X6JXJXLydQwAAZ",
  "key9": "63A3zwJ2ikScDpkSMbBMLicYkYpMfJWUjEvcmorAzJ8JxTCa8F7mKYPs5DXnMuj9FK6x35jAi3dZMGiX5swD3bgU",
  "key10": "4LcuumtPsbc4XocJVmEb1bME63vjwayLFeump96oG6R9Q5oUK9BRCHxyyVaX7yGNwpeAA8FBsNVU82sGJNfDGM1g",
  "key11": "4ZXBAZLiiDAWdYU9cWHwQ34YZDD57qHYH11r6sNBptr16rDprtnSJyuDPbESrsZxe8MG5Gv8pSdffrEBXnUJeeAT",
  "key12": "61fm4TNQaqY7uScE48D5uCsxhP4KY2rFdN48SyPZPbDRxPgA5o8kWDU6WWWc1hE1ocvAon34QSqKSLW8XNTed7df",
  "key13": "2L6Mc6Hc8D6P1fTCSexrNJcnDd29gh9VsVbDgnqfJqDHVo6n25HfLaWj64CQ8322L5qbiNoKoQwfPWEso3A2xuJ4",
  "key14": "5LdxMh5vG9M4PTEZBJ79ycUWbeAmSQuvtzb4yXsQMdvCQZE2jsBm4qeDGMEXP4NcECt2e26AiV527MtwVoxu3q2C",
  "key15": "3atWZsi7Kv977f6aXnCuSgWrytQWv75ZRTKZhasynSHu3X9gHPjzU4HKsd29UC9rU6nGQC3oiMf9a4zRoQTrd7ev",
  "key16": "2FTAZVHZw2d8LHBP4yNftL3JnsL4BfdWeksLRLG5fJ9WoFBPhfR4jJZTGAbpkVYd3aQdmJZFBGvgVnSzh2GnbuDu",
  "key17": "Y5epTuerZGYwbNbvzNENVjhdFjD2d7nwjjNz7D2NpqS5XsYugAdYrYWNJ19vNRD5ajtXZGr4vBzCAy3ZvDr5oh7",
  "key18": "5fB6MtVrgTnN3PvmTkAZgV8kkoZC3oRjxE5Y3ekYvrcrELrXQh2dPdKeM8HLh8auDXbrZwR5v6iMn9McgBR4PZq3",
  "key19": "2BjmxrKHRkdA28PKbykpf7eyecZjVRTmhPp6N6ySAxUXN1Lj53crQaX1QynhxW26CKu2g6yBLzeeNfxXqCt8ziiv",
  "key20": "2eQbyqK3Q3txhN2LAuufBvXsp3aJnafoPtsTehF5MLrRnmysaeaZ5om6CAhKma6aUDzVyXxXwPfFKBG9Sco5fQZS",
  "key21": "2SJuivqFXHUKurCLX5mm4LcS9kQihTkTbDqnHgQTdGTDR3JFmkXb5vXsQwMSrGAYg8v4Voo9vB1Et8KrYCYfCQFC",
  "key22": "5CysmUJAR33WfT2MTApBvkmTe2Nz5qERdz2K183LpEgmynGgfcyxXT4WFzPMhJk8cTgU58z7oYCLWrhuwRw5MxAS",
  "key23": "3hCEmuAWE298BXfoDkBUrYELNuffC12i7cJnYTYntf4duD1VgvnHbJWcvbgG4nejXMQR2S26vsnm2VoPFLvJS6vz",
  "key24": "2xMYQAKvybJ2SHd8SWF5Unas5jsoBqtrR3nC3sBrf3i71V7mY8qQVtnaE8p9nc4zRR9j3xcct7WpxJZmg3LdD6es",
  "key25": "2utj3pTk3bTyg7kCKeZuMsPuyYroZFXM1wTCxxYc78jGXSFeAASZtQjek3NTjijKRQQrG9LAPmCSuJjajWvhvA2E",
  "key26": "3RvFJdmK8hX1GvQHZTQhkVwnLeH2qiQpRNbNbAHsa9CsR7zaqNeHQYPHSoX5EkTWMpV1aq2XWBGGnLtH516xKdxX",
  "key27": "4f8trHWZYZ6a9wWbxVoECB8yJDeSeT9VwePEAZHdn6BqEbsDdtJ9VG5F9oHqoP5r52s4ie2ViModRb6KvDR6zx1",
  "key28": "4caT2hmjTc5JKwPuyMv4UWCzMxH2wQvBib9fmUcjueBaY65F2VZvzjnwRpxJxMDXJkv8LVtfdLvoYxBsw86U8idg",
  "key29": "5xY5huRyBuUoG1AYAMS3pUvgnfCVfo39r4xqqWa1meE5zuV1Jv5oJNu8XTQ3ZpWvZxKe2cRuY9mKaJCjutzjgt7a",
  "key30": "2TkiibEPt4AgtUWvTRuZNyH5BD9X4ZHzZAKzYN4RAoMRfymYdagahZAqsBmoWERA2NwY7Q9KJEm4oWEX9AyzCJk9",
  "key31": "eGQQC1pAZ7VFJRmiJ45zB3mzefxpuUb4mToaPFEcxD9rsCwKizHt1Z2H8yom28qkx6FRrYfSCVrHDUjqjcBEv2o",
  "key32": "3wAhS1pNqXMtbsz4PDbEtw4a9G3ydM3wJgTDn37ArSXPykavnyFLxeEPUnYbToD3enYpQfngytKUbT88shsMeoyy",
  "key33": "28gnjUMkxZDZ31ViV2N4WegzjXQMARSUsnhsm4JXTEDkeRTSUFxKmxaF8YjKzZw1nrxRi73mq89U9fQrsSGVyWtD",
  "key34": "3bekcXpA1Dwt2Jug6rZ4KkFm1zQ3ZL8dSqs74Rdb5QzD36Zz6saGXtNgnGoJsqvXErDeQng1s3SCai6g2JDNfpq6",
  "key35": "34TVF8bp8pQ6XR2FmgEDCRSpXCPMJaYVgtaqFJKKQYA6MRfo9rt5L1mbpjCeevrJNViSHV2fohHwThwDaH28voFF",
  "key36": "hQp5QXuZgSV3BRGezyqQGyqC2P8MDwkD6rG3rYzAUZuuLtotFTmPAsgspa7Fqj8tu2HYX8cM6TwgrnyWu2NDJz8",
  "key37": "2m295wzaJ5bmpLXTJT8yDmd73Mu3sF18tTwe1ZBNVWgJ8MeiEDF2N1PtW39M4K4oPybQwtyMRfcArWMAN9xR6Fxd",
  "key38": "3sXQ2uwHuVhR7pn3vjWECgGzfhiiN1ZgAVx32bDZbAC2ouHLkmpTTBFWG9tJs5ZCdbyDLusx1NdqVaogzcPeJHSY",
  "key39": "5Msc1zt2THMr4WDtET2qeNw27tfv8UsZAUsKQ2ujnaDbmQjt6pXAHrnRkzRcwbF3dG3sGRKHvBcMUtpauB37xAtq",
  "key40": "2bgRxZSd6TimWLrRatmisYztTKHM1im7ybzyLDA1rTpTLd3XeRXc9rRBAFmL9YJs5woKsV37KvHkLEtsPkq8ox8P",
  "key41": "3ShmN3hKpxPTbTcWUKUY3njFi3KEfk3abaoDuisfMZy7Nj2SGmQPQqKkaxHnXtFvheW9vy5RLi3otSkPMqxfQUiF",
  "key42": "4vcAu8a76oKodhnM45PEY8zuJU28udAfLXePwrjkF3vc2t59CrAFxtpFPMmB6C33usFrUmN5LXZm1fpRGs1nTnz1",
  "key43": "4RozRnBeFSZuWb5b6KiXYqNwiydQrV1r6Trwvy2Noz6T9bDVNeeispaEacyAdRTFVASFgMxPVY1EaJyUAUskfBPv",
  "key44": "3yeKa9dMwvoYATJy1Dfr6pLJvHeAawzv4Tj6YjZdKtrFyG3HaNmDiC954VSVZK1KQLTKCZiihUVeoMr67jpJt4j3",
  "key45": "2FEpUjCXuEAmAhUBpLuAuf8xtXvHUANWZuyXu92muik5zRj3JtVteTd3wGL3vqxn6ZXdGF4et8D5Wuo4DZwUFDbz",
  "key46": "65ik2XwJsMQMFy61SJP2pMD9tZrBdwyqQTEHjL4e8LWCqZb1vDNmGqZ4gvApaN4YNHJGXbqJRpnteiaEVbqaUak4"
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
