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
    "Be9nzjE58281JmwnS2Dp6qeJ1v5ngGuCW2gwMfR1gxGgFiNu1Xgpy1nSzAvzP1cMxc1b6n7Q46HxfrDHjtgVRxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVEw4u6nMm474oMuY6r3X6Vuk4e7ss88KVSeWaZEznWDtYv2XfWSKZAKQWmKYwG3y6s1B3Pg61z1GNjajDxP5j2",
  "key1": "3HwLG9trC7nJ6KBY5UkvkTmWPgwApwaWugMLTzjVG9afnJRsE4erqxvNivBfwmwwx6JC9zGzQtXdFF2jFVrBcLmh",
  "key2": "3dbAezd5xods1W4owiLQP9jgxCyeSNoghs68jGLjA4bHWqHew8BTwjN6H9U347hF2ivuFuyL6njXUhZyWQtdaoW5",
  "key3": "5u5aiBxxeb33xK4HZBhrYSDkqDEYhBGzCQZeAD2GwTFeYq3Z5bwBArMkzFH6itn7VRKCyETV3YqmjHUzH6RDTnYZ",
  "key4": "5aq2jHCBiPrDE3zcdLQ5NgfG8ARWfSFC2ubzspPgLywdunahEJLh7tWGLmBiezwXJedeKvhD13DXXteQBx5LzAjK",
  "key5": "3h4kjCZD1rUUtXGfNc4cHGgdNLxz9bfsTVEFRNkyMAfsRaBTTnW3a7UZgY3uHDgXvsDaQxk7HXaupRZsJ5i7WtCf",
  "key6": "2yPdjJBum9XDSyS2evfH5YWcMPx9aAxn4EQQMRsgxFYayRjmnDEmsfH2kAyfgcM5jZKCcoBwGJRzyaQeshtCt581",
  "key7": "2nFVwQodFDWNivg6Fu8NzBtPChPUtY9zDgnt5qXTpS3iF5zsjoorcFrp1EoTHuEVQJwZticJAy1AfdbCcUA6m5SU",
  "key8": "BDb7iPuouoB8WCGSrS5EACuZaatJMZkMc4CWNmQXQUbyR2F1CbYMGRCiwRHxmryhVnWdbSQFDyBHrUbZSofbPiC",
  "key9": "29YpzxHwb28VRcLqHTKGk32YxrMkisCautHHNyV7dLVQViR6LgqDZ3zdUbV37rCVRcR2TrtYALuzsG3waUx8EJbt",
  "key10": "4EPT2enYdykmHFNtTkqPirNnhd8zRjhYwxUv7broF2t9939zqh3Q2J4VTbNJMW5qxgLctT3c9Cbmg4BJ3btN8nBL",
  "key11": "3Lp88Zx2hUuCaUHz3P8Kn6B5B7TFhoHQV1Ayn2CgjGK5dkoKe9p48A5c1Bp9L6fYg3SJULjYsyvMNqXbHGdQ925U",
  "key12": "5K8EAtSwCd11B6LsPUU74YiHqcXcRcdcX5hzWcsTELqDF1hgTdidmDRLT7Ea11pPHyrLRSVuM6Mfs5MNCGxC1Bam",
  "key13": "WvMXkADH631sW6jk4kgXPnn81qcETUwW2BYhjER7jwu4JFkqMpfnKAkdzWDTAYnCmaFvSaGno5AUXNTTG6MhscW",
  "key14": "yhJZtcu1XZYdgu1HBSpHqwQ7gTXE9C5ncvjP9B4DsRWEA78qx5SHtW8aZdCfijttjobJhPY2E4bAvNKwwsHYBxH",
  "key15": "3SoXkSbKw62AXMqrWo3zixfME2xTgzqAPwQXKEQESrraM4FVA5vvqyGUnsJo6vvXVEZtepeaozBfA2A9zfAzQYDY",
  "key16": "34mdaqjcpmrT1Q1KVAK3MNnZyKvkJ7CALpQqAcnwtqrbgDCAcsFPuoBpQJ15Ec1pH6EkUnC9vG3H53aHzV8FGU8C",
  "key17": "5BAKU112eM7uvP2wzebjwCh6n1e2T4fY8ZxXK9QQsyoWgNr7iJ8cHwAL53fn2QPQ8VgN8hc1VN79aCd1QBNwFKBV",
  "key18": "3veoDUau9CC4BNMHvR5ZRRKHJ9mesbc4QwFeJRvxQkhieeNoGUTbucTiQhRiPCMzMyQPRhZZysgwGDkkMykLJe48",
  "key19": "3CgcTavgZr2eM5eosFC753t3bivNrrDaFNmAr5bVm8BSaimPxFHtr1p9rWRVEK7whjUVyi7KsY2LVxazkrpKUZxA",
  "key20": "5xLGCLDdgwDERZ9BGwHCSwFitu5PvtSpKmrbHDkDopgZLERATFLzy4sEFvZYP4eHjDqzD2dDEqEzDxWhnweheTeN",
  "key21": "4FM4J2QaxCpdMEcQjRashAp6NsaNQpmQPe5SSPwabK7AcXGuFWxiGMR7ePnsdhBdRM9DHXjj32mwWU1Mpkm5haNf",
  "key22": "4JZGKxyFm4ARYgGYbucJTdAnYebvoy7zhFtYLeAQZzbudu1RsiRYifdvFXE3vnrirT22Yxyua4Mz2Y4wXo29eFBG",
  "key23": "4f2YZfTTtSGJTTgdZYmAFzAJmFFSTh2Sot9aW2NivtTDz4YNTkApuzSpYPADTFgKrJscax2rxtiGgKJGKbyzxMpm",
  "key24": "5T3aD9jTW1H14hfWCrsRLeECBApdgixiWtSaCZw6BZUJPmzmi6gsYvrpgKNSysGmY3UvCEwGayDgPqHV5P51WPHn",
  "key25": "25QxWYziN9QRt4gydnZKs9tTwFd2s87PVNn2BFmWC45NVvvqTxsg3DxjjScURj7BCseCgCE8xTAgcmrNSBkmXX3J"
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
