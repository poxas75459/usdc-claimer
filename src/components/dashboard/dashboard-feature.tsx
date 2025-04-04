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
    "5MgQ2oyFwqacfPsZxfwhUfjwihKr91WwCUGhZab5q6qBBJEQj3HoGdjbTmxZjDTaTVJhzArUBaKL2yG41f8wo3nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kaiHBnN3cJBo4g3hMb6dPpKP6etYD8u1azumxM47CSLsxkWwwCUxQrhDEEf9SWtZRyqnNSv4WgVxEEiHL8Nz746",
  "key1": "1SjS1hwdFp8svUphNADrisk1KbGkTGyhGqMwzU6EZ59Pq5pup9RqgwCqSHDECaCxD9NunhsMYYdgxrJrSChF7fx",
  "key2": "3GSgYN3aRAj7VHNmcaLssydMzNTwnc7qCg9DiXYm6nvF1qvXsWakSgdv3czcNo6CRNHpvKabLgg4rBfASMqP6xRC",
  "key3": "3v5h2if224StLZf3uTnHWqfbsfSveWPWiGVzafCm2UE4DE9ypY4hLudDznuCVJi7CyrjMEyqUUPXEDEBxkwTKFw4",
  "key4": "5LEwDxfBkKCLK212HHMwTEinTZZEionwuDHTkdMNk5Xu9MkDaRs4Sq1tphNj8ru9d51RVeRBBtHTdUV3C8P7JGwo",
  "key5": "5utw2tq1dXfHnB3Lm9ptxeska9hyCoWKioBJpLndyn6kkpuqyZL3q5V9atG7GKDY9dLpxC2Ek8NruHzcNSbxosjM",
  "key6": "25VYFzkA6m5aqdMpGedUCwAipYayX5eSkW9W1GRvYqMCAvRTmn1pSHMLcVujZNMP8pNcNzFoxfNhosXif2irwec5",
  "key7": "63fkuKgAbSyytRwui8uPTyBdTQUHSWNMkrtpuBwLmaLMzi8Y4zUYEBLabhf5aqiLLvRbjcekNHhbE3vCk9BERwZ7",
  "key8": "21RGZvQ4rLbzYw3RDsCSRK5eV6vVPyn73tbnHDpq2zo544t8TUqx8y3eLLZ9JGCkqiKBSBZza3npb4qBp9yd2VB1",
  "key9": "49QQ5VoKeub3Xs99vtuKobzbJ4jA5WyXuPuwotQ3mmYL7ncR1UkFpF24xyiGDbEQxc85bTTRPc9Kikzzu15FSKZR",
  "key10": "2DSm7zjoAvB64q2sS6zt2qvA1C1zyDMudSUmG3cEiKCRwXn3JfJtqCmJ4rv5hY2rpBHa4cSS3ZpQ3G3LaPhUrXRZ",
  "key11": "5CpErzukz41b9Ruy4kLeEyiptaK1ourYwJf4ntRvzoyK1YuyY3moP2FG1xxag8uEGxmtdYHb5Rqa9CGcUKtNKThH",
  "key12": "3n2ZGnG8W4oMFZ78fhnQRCYuFCayg9e55msJVeiwkAjRr9eJoSqtCaLLFVUL9a8fnN3SEubzxAqSPsNg9cqVbBni",
  "key13": "3EmeWLwbdriXWqEuecYHPtbWi4iR6qZrsD1Yo99TbSKEScyEKTe5vJytQQNPbnzqoErWvs4QMngMttAJ3JioSpT3",
  "key14": "3Qjn77KZjzQMWv26c4UTXMB1miFxnXzEhFGtJQQeGf2XNSdFcgynexpAV2rRA4f54kHaW3Jggj1hkWgGA2mmQjV8",
  "key15": "5xnPJw4ecNQvqWKz8iEvz8mMYXqcVpkctGTU4bigHntHXh2mTo22qyjNo3nji7iutMJg6LKAiKVbzhPDWgiVuMDx",
  "key16": "3qrfhe8rAu99L6rfofjbgzKmNkrPAaNP7UHPsPcGWDgaStoLgpvxgdfm8n89hFbFtWUAGKK5u3ZX8hEoTN1BMTj6",
  "key17": "LHqchszdpGAS2TXpytinm7VhuJtyj6UQyAKphhnv3o5gTjcNh9SFXQRCZc1vwKJYNkmjeeYbMH6EmpgKqcC5qUS",
  "key18": "4zMHjpT1BfpEL4yoWzA4atzoCncKvXBNNA5Chb3P2mKu5r95xXyxV3VpKDBeTfA9Ft6QqaDw9mrBJzr6ZPN33QsJ",
  "key19": "3prGFtHGtnR9HtGufuy2jTNgAkVhKWdDpPRZiAFPswFxm83MhTXr9RY1D8UoZu63EFLYBgdMBirCJUXDhnp1AEYJ",
  "key20": "66bwnDosy1k9a5S1R7UnPzeTe9bbTPeZ8xtpkm87Rbp3Ctunc3ATd6ghf2X8vybuaoeJJ81WRM2oKXKwRUiAHD9X",
  "key21": "5PQa1fyUPezDmDq8Y95SXiKQAA2933N64KLK5R2N7przdfu5Qd6rrvYQzaMePisYAPR14AxeAXaXw4ZByAU6aEfK",
  "key22": "k6gd8dBCodBYe97a6gDd1betmjaVhdJ6uhDeCm7iCaMkfBSaVqpAMUDjnmsEe1fEkNW8owXWBtpjuLsnjA5DS7U",
  "key23": "Gk1KtCAbM3Y4kwrrn3hcKFdiwj92nUqeD7QQYZVQFidYab5QbDTS98Bdm1s4AmreJzkS91mp5Gb9xoRPKdNzX2k",
  "key24": "2TZuzCpCtvy7L1EQM4TaxFbSNsnxyVPXn1YzTckdVyBXro3BDGrbPJXdqfSZg2q4q5botjGcEtvMqjWigc8oN7RZ",
  "key25": "3SQPjJEsm7iwBYfo6NHnNnzitXBUqPenSqTjps2kMNRDxpsrkoLEzEZZEWNTt28oKDVjtmP9mQUiHZcL6ehdRwgy",
  "key26": "ApDeyx7b9tFhauAYx8mQj1BZScxFkSJH6fG7tGYqtXsF1Uw3HHaPSonXMUeQFKUyjD8nfXXuUnSZ1EWWonnxGBj",
  "key27": "2NN7m9qk6K4SpyutJrZLFJRbtXQ9kxTtvU234ViTgSRKce4aEeQYQCyyqA9d1utpSRczZ5ZKMHFjrXp8nYsCvgL4",
  "key28": "3DaDJfVv1X6mGWfJXvs1QVT6YXHrKo7PfwxR7hfr6LPo1Loq5XgYEYja9ro6Pzmo8dHYkX8hyVVGzxFJJeLLkZ4s",
  "key29": "65YFaP4YimENerJi7wmGsyztWiJDw1jvq8o98bRTYkEGeYguoZBdw5Af8VojeVMnEg8wbZak38cdqa7AS7VYcZd3",
  "key30": "2nPpcEmZjJpbyPy6RKzvdB6wKJ7tMWgWNYXrey5MChYxairiAreQTcZf1aQcoHtaEUz8XKa4wXCqYrZ6Exwe99vD",
  "key31": "3mCwAgUXByPsTASvwXrcS5phBYERSEw87GbtiuJf62CKm4bJdAtVZZ2WnNMqporLdcaihuppMefqr3dgqHmQr58A",
  "key32": "3BkrZdut6q1aYZ9nAv8xa13pySrTACAVqYovhiiF8yinKeGis1LXT7j9qMBPjX1SR93Ykeo4ZQM4HKMYvtTVKLH7",
  "key33": "3Rb94DMvjorAMkzoEAAfjTAsii5moExmkKmakgoXsXdE48UHRbyJZQPBnYLXW4Ho1JgqY3TzCV2HmiFxGF3tKHNZ",
  "key34": "542QQyEMp8Nd9bXMcs6CCr3LgS2szfKe1kqKjiTxAM8MdYn21UPuoj7PYDMtEGQZr9o1UreqHwuM7JkMiAkuWWQA",
  "key35": "3spkSMnbKyuKuYFBRx9G7RP5RQYVQ7PDehy9EkPsD98XChKbNM9JPGuBmv8a8QKWyWadGvdULroYBmFS9J5kyBBX",
  "key36": "2f5u8YPirvLVcKydYkZvo6sJyEwGD3LKf7DRex5i37ksHsShbkyAvm8PVxiapk1z3Fa1RaAPTj6SmKELfUQkL8VM",
  "key37": "P9Guzdbg64ygdFufnCt3GqDGfz47pSWvqqBKNDHaveCkULKBQnNsC77CfnTLM8X7ti3VhWbtogoNJ1XopdBqANK",
  "key38": "3h4xgJ2aBg5P2TYjetS3s4JADgNtGN7g7cZMxs52KPmMPJzn9eBZzKmwnq5xJXQdLM8HWzLU2CyH2azieX3WUo7A"
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
