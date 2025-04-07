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
    "1gQRxwELBZbKWk1XrD9ouzRMSXh7dQEt4mDd45fHGh7KPyzzMDVrwi13cFsdqYTocb5D6pTsyARHEFzzZMPVeoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WW4Q4qhry8XBBiJteAfujSBV2qpcC32DkjZCD2pihUPv2LPCDnh62oAzqU2f6Rjd9b695Q63GgnCHVjbcTdfuJ8",
  "key1": "5mnjMnBEswTG5R1Wo2GJiNhS8xVBpUo3mkhKTX3hn8L7mwtMWFnkByvc8HkyAy93qTQtSjLBtkuYrtAeFRZmD5wM",
  "key2": "4cfH5CWtZgT3Ak3Qn2W65K2SukTN3AUKveKrUZWyqBPn2f6Pxgxe7NoCQq16vRtSfSRbrxmBbBXbc9PSezDwntCC",
  "key3": "5QqPTe1EabxqgjwNrfdrCxkRNAnX3nuU4xGYDegCjAqcjSjKRpwfV8GwosmCNV5UH2apZvEGhr79BgqXLVGjYB7x",
  "key4": "45SjiNoP6fcEMqDry31yyotkmj7LxGoyVGy5DXtALFgmLpjSEn6XK5xWBmFYq4Q1hNDzk1Efph8DiwaLBJAUQzhA",
  "key5": "5oVwJEWnMZ371NnBdmy4vbbxjbwJdbVHKfRuJMCj2yZskBG9aJBFngby1xsQH6WbgeywE911hUHmqzgUmFt2kU63",
  "key6": "AJ5weMdcDEQk5ZuXsvSsveuCw5U8xGnxsZuWTYkx11hfLPcujLrNNNNG2mGpuQRKtDaAVCY34bWsGtFRe6HUBiX",
  "key7": "3Dpeihmbf72Nxjf6GEwMQkUBiPxiuSDxWcNJT8HPUnueZNwc7frMJ4NWGQKapzMZ1xrGjh63vQdk5ZxzCFA5xb9F",
  "key8": "VXU8bsAziV45G2UMTC5mcnxxHYZGDr7WS3tqPV7R3Aa5o7bfZ2VW2jGBfPxyyi7F39TfD5ZRKmm8FqZF5wZpLZm",
  "key9": "5Eq1nCRRC39RoedAPJtwY7Dx9Fz7NPozxmLd7vEKWXR1BD15y9xWWDLGu8iy19KrPPgWRzWwzUQprNV26N8TqGQG",
  "key10": "2tud47Kd8wkeuXik8cs31pQTYGRShf1iHE7zNnTZsXNYNLzwXakBrAccE2i1b31LU4mvnzBbtg2Zfc4NWocturQY",
  "key11": "3gR5jz4Nc5kebQsfawPJuQDkBT4fbRthpwyN4bCUuZpvVpyjcUUui6YPtnx5vQ9LuG7yftzYfbKAqxC5dzM6Soho",
  "key12": "2XXveUwjP5ujDUDcGy8nGqei2d8tVjjyu1wpz4SWx1GGXK1uEqT8DJnVASGAqHkqkDB6duKnSH8CmhqnFpzWaG1p",
  "key13": "3CYa6WvYEMCTGS5GDkYPNbuNHHST2p3vAnV9ULAtxNzQcMWcqaodAHn7Ge7xvtqFm5S936ydAKmm9Hzy3kUZnGRX",
  "key14": "2SZe1TryoYhNEwDxhGmj8XbNjxYf96azHCpZ32vyebg3VmrydpN8WB5GKbdm2CjvAMcXGFpnzd8T3EJA3fPedqqN",
  "key15": "3qbWznsYaCYJf2Cvcu8cHk8hK5yAdnWQPF7Vw2PsJsitDifuUvaBZVCqHqFu3Yadmxq29G53JMSdTtXF64MWeyGp",
  "key16": "2WCQnkMMuhSitW3HfyjmoGGmbNmHqX2Ttyp93n8FqGjtFtWExaQjseixkoj4WrMgMZdDgaQcG4e35FURyPmnHVq1",
  "key17": "41NMXWXLHQ386nKecLXLWAH3BF6U6Wa52b5evp2WSmyoZUgQehusQrKHCHX5TLA8fa7gVWb8CeQRmLVns1MEf7Tp",
  "key18": "2WBT8o8zzazfNrVSD1BdELtYpwWbeuC7xCJzjLpsSTJNphyejnS2iW1dq3eeMz3iGGFHnn6fhTX9Ge5ixeKWZQBK",
  "key19": "5vzsxymf9GjAcyXNygYud6t9yBCijJDHqfFS4P16MQg6nsaroxMEsGQ3fVuu2xeEUDJvHUjb3Yw6bgjHEt3YdRbT",
  "key20": "47BbqZEEvm9aDYMbYxmZv1wXTuYz3NEFFZmBTP7kHwthuBbD2Z3uKe1j4bVYTWrUsc2Gi3vQymnfKR2Exy9zZbab",
  "key21": "3S9x3vqbJDx8kdXXQzKWHkmDZZEfEzKs5iCUwwczySVskaeg6h755q9wNJG8e4E9efiCsw4Po4xGT5nG4WLWzktD",
  "key22": "sVUAWEAwhmaZFsfQ1Da6BdjvbdxDyyW2KYFpjXZgMQQDfBcsn1YaFax6FdvAZ7DyQkttrFz4QZNMf5WTPn6Nx6y",
  "key23": "wXBQBQk9PRxem2bxVuhLTQeDhSn6AzUhDiLNWmtPK4yc3zfNAQeyXCrBdmQDzD9cQuVxgswdewXz8DBtUmhfhvb",
  "key24": "Zf7Kf2dBexEoTBh2BVAD1oDg14Te2BQd7wtd7sBUZ15H9n4EECpcAveNT3nXqWqKwQx3ydGn2oFQBe1S9rFXSGm",
  "key25": "4Nn8c7uZgh7QFynrwXgmLasG4kAdtugxDxLi3Z5fD8CqYfJ9Ybuz9eWGgTrbMqtschhksQCLmHmJ9v3mi4eDyBQD",
  "key26": "xpenDS4vdZc462gzjKopUK9Nm6v1zDrdQNFZ5YDKs7P9iyxdykAC6yhyvt5WGV6FpfXchVLHAmviBLdNu6WMGHU",
  "key27": "537xKtBnzfobaaXwG5vqHgBcZZf7LzkAVRzMTdXe5e5RoSUaGxeX1DjeUTgZN6YZxSY7NxgnaArSXztqj9yn4nLu",
  "key28": "32ZyDRZ6ZyeWtRgjtkPzryAxy6RezWJ33FwTdgANp5m6m8f4XBZJUZ8uGQN7xoefznbC8qPejaCNnqPdnLppzjC7",
  "key29": "26JdWaQ55cXXrLh93p9c6dPn2F2KSjqao5Ec85wHPmnJPFGFapakqZf7YbqCEq2f9qSbafL8Fuhfr2KcuY2et69P",
  "key30": "3sDK5obUt3NvAVdYTEKwJNck17zSfMdyDXzdmJePA8ZtvqqCkcip4VvA3S9TojN1RqtUcB2NfGtALi6P1rQgaDWD",
  "key31": "47TaLQzHqR9QrZ4Skba8U6jKqmjY4hkLUm7s9yCaSbE4LqDczGwfCyT77uV7PTNZCuZQ2ZMWt45u1YwimWESqoLx",
  "key32": "FoKFPzF8RrQvdXLfQGHozwSGjEHEh3KGaw8VyB2m7G6b8KsjEtZbf8NHmg1ucQojhJgYM6s3f84Xkb8RdEWrJDh",
  "key33": "L3Fh39ScDoYE9XnuuSoH9LHKk3gDhPrXLFGx8AhrNoDLe5G3R2boLUVFXwZ4jwQNCYYierATCMBvaPkCrJJkqcD",
  "key34": "3bDeuSpQ8g2NsASzSPgcwRyvyCvpbiQ3vLCeFTUz8eCyAjUcoUSVdZ9FNSu1rCmP49C8caqt6caj9tffDbXLTB4",
  "key35": "3yn3NG8DunBuPTuA1YoxdKX5KaWC7Gn6bonMR5W46Z9eKcLvYTtBxGNyAwSVGweai8LVXAbb8HPTrqdgf9s3H1xb",
  "key36": "5GJa3FMBpsxwG2FeRgUeDSS5tZjtTaXpJYEKWtwToVYy6etmuew7hNQUXhUmeUa2EbHSpSMAaSUDTFwqgcgksAZV",
  "key37": "46GPqBwEZ2Ao3e2JKtzyXEpLpSrtTDyKbo4H7GnLFkH9pFrQVMDwnHdXffGQXjLw4o1ACNiprayeXgia4v6XfQC7",
  "key38": "3G9tA6sz6atr2YrhrkmuKNtAm7Gi5adDXBcJMS9m6ka6W9Y2pwT1w6Y2m7RfAuBhX29SoAJ5NkckLp9vbBQzRf55",
  "key39": "5WzV3CDYCh11JVXKvMYKPJgiGthfbUoSgMgtE5Vekj7KaLSqg3Fw21ESDr8DxEsUpwivNftwdVXLhEo6r8b2k3oJ",
  "key40": "4Ryveu93NkCbSk7KxupF6kfyF6inVm7YMjbHxAKYANVfxAvkjA4okyrr12bJ7LTXYk1otUVm29RyDmZekPNNkXCh",
  "key41": "4wD8kUV7CNoZeqV52kTqi9LzqCM5ayFxEewTub4PFQoc4n8oDSAHJrog5SwZXpCP78gs6sCMJaudARx1Zw1MfMr7",
  "key42": "5LeAftydAdq9BM5XbMdPXxF42bjSbd8x1UiNjBEjr1wPFxLhSa79pYQpUWh18ujVdHCMMpPEx3TfuWverpzamEzd",
  "key43": "4dMVvggm5dJhq2Rc1uoisnFeFLzqiCeqNVjujWaBa4P4hU9URytoBzay55kfbSkqkGZVh8vMoJCxEcDkyLmJ6v3T",
  "key44": "3rPkA8npnLKQ7uTQ3Mz5ghFK2XnDMAztuu6MSZ4JLQRUzanEXzPY2Etk7AgQKUZnQo86URRkLjr6gbwHM9yTwWbi"
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
