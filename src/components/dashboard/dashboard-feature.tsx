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
    "4a2LJdvvcjoduvEEjqw1tZf1MqNmJgaxkFZEueE4nFuSpBQzb3jXhf2FsCzEzNa5N4Xidy2misAyFzk7vAckkueX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FLizuZasCMcLnAKqEP3295xSQHg9wJPXAToSRrs7QEXvktwWVaen6WLatAUczAnaAagE5rRasZPr5wV2UN9oTAx",
  "key1": "5Gc4axvP5NmzucHHZDm2s3NGhjQrdu8UnBTzwJuAU88j99bUq6K7mm1ACUmuSQ8ZNkqaLsMnEjnLfFhpjms9di8o",
  "key2": "2F7tTQoCxzjWhohTVM65LHqd84wbajJ7Dw9Ni2HBqbFxdPdcRMMvJeGeGkCRfo48rhxyJvjyTxe8YPqGLP8gWhuZ",
  "key3": "2jUQzakx1HcA5UJ2iKQyNusw7gs2uCTV8txy3tsstXyjJvRDZV9aL9WTVQb6d9xf3MmhvR2qvqiD4kt8dTuTfAGJ",
  "key4": "Uv5vjK7YathSLjzqB2nvWDDUxp7XhyW1qmdzm8rpw3VPEHC7p1oxar6DLxkxSkesHWfkXGtgos66GVGvKCWicXt",
  "key5": "58sXR68SSeW3awoTUWQ3QSfwZA5qZqMePobBRD7izL9tnmFaskf4DTCE768g7YyorS4mwCedy2a9yN6dBE9N3Kkx",
  "key6": "AXAiwvpXamJUyALKuHZ9ECZH9nhcAi8RTsPS9jW2PcpKMvU7pEaSucyjj4FeEH9MvPJNjByvj2RKqKLBKm9g4rE",
  "key7": "3kp33P4Wk2NRepYQ4mR3M8ppFSy4dznfuy8Bseh66PrDarwr6V6aVhMLWWAWqVdFMibzbCWBeFp6pkm7x3EAnXVL",
  "key8": "5spWN6CXeTaYR817qpVcUjcKPm2xC8YPTVLqaQSgxg7iZwSYxZZqiNtwm3Meg6VvFDHWaMFhuQoG1FHh5WFqPCHU",
  "key9": "2U2dBbz6WrJ3Shnd7DhkMaRb1mY8YWs4PNzgwyp7M2fkYDtfr52bhv3pfuHQjG4rQXBdLQHWDeBoTJqatbWtznJ7",
  "key10": "33wFDgteF2sSH6GLxLPgvmiXK8kiBFJrYttiQaGenQaXSxfZrn9yHyZwieKSdNzdpM1YqRwpFWZXzLMAYC4SB2Ug",
  "key11": "yfzijFNAgrRrz3atR6obHfivFsTccPnvMpKGTyL6p1rJ95ChV3pimjgcTNkkswSht4Fx9xzFJbfaaWyVv7NCRpb",
  "key12": "NfiE3rFp1zdwW133BuHVhYUtoWSLSGVRZMMqueu8erY4SLmujxWkzS3J7fkEKW9KBqZMUajcV2n6U43CQAgNUrb",
  "key13": "529NV6ZJhn8VyavLxN9XdtdAHm1RvSqeSyNAPHX8gTXWZthFiCqrvTbiTACqSFZnYhC3mnxrJeoYcFZ6EiE1PAxV",
  "key14": "eWmcoyA2NyKioxH9WQHMhdjubyJrcSvN4MCFLbxCg7jNFxEVZmhruHjAUGsXGybNq8RhL5FYeGbNer5fX4EdL4E",
  "key15": "2Dphz9Z5rDKWXjY9t5EpG9PCMBbAxSkee1fnroQyicmGYa35XvTbvG33M1jGsxoAcrhZAMCKnCkLQ77BckoPKxwB",
  "key16": "5ADgGoooUN8acYHJD3XXEcemxXrUDb5G9xCuc9Gx2P7yZP57JTMhRnUCnpJLKrRpQGawcv9gNcxtD1pVimr8UUw7",
  "key17": "3qojfA8bMhUwbJJmiAFayF6DpokkJFRCLaBaNcptgG4aYS3GEBzUxBjyTjP6iuJu1vGYEFfVP9fHFpobbXdF5RX2",
  "key18": "2GqwYL1o8YHs1ncSZg2xZ8RwCX8KXtxRphWgEkzX1QDV815Ddm7naxaDMMkS595ECdc9DSmq8Chav6ZvUpLvhLEx",
  "key19": "MXBhAHfhEXuJjnBnGwEZ9cjK8mMGQtvwZfhcGiRoGN9hUi3WzfQ2oRDHpg9wExPJvW5Vq6T9THFd1d9CS72m2Ha",
  "key20": "2nQKt4basBAEEV1VjPTmWWW2STY837vqQmvnRaHCjyXxB8sTMpgF2fg6Dzm3oCVNgFPQ9d7aM5DqycNHSSqCxC3o",
  "key21": "HHuK9WprXNyJXRNgNuygwc2h2qpjePPWnLPqT2HzBtNcphW4UgsEvs6b99hTUAo6XSDmGMjZR19Sq7c1DX6KQDb",
  "key22": "3q4GUKwBmAXbSDxdPxotv3SPkaWBxCDXJ8ngjQttQPWuvVC6JZzJVw8rZETozM2YtfTKygC4Qj2fWxQuVxWH6Gf8",
  "key23": "Nq4F8bLNBeDbrM5EJatbX1dQCNjGjkxRQo5K5mgiMLAbQ3guvF4Pepdv31kmuy7BAcKDJpnYG7siE5NXKr3mukC",
  "key24": "4JvVYLabDw3x4oezAM7w7BCiDcvFHPkFaQqLQQ2rJSwSFcRobZ9aJaUYqU3WxZiNN6E6xiv4XRmnAXWbtZzKRrmk",
  "key25": "4aWms72CcsXTqcUi464tM6PVEo9g4ZKRJp7T5aU7K7ESK3NLEsXtuKHbRF2nRrZPEqddnzsHSxSZHZjfpoSiRRkr",
  "key26": "4W55NDZvpf5r33XkXnC73e4a9aC529LursdMS3iqnpXdhFzqk3ZwJJajAy75ZonyULuABbEoWuFXyCTX6KdmJiMZ",
  "key27": "panPqBGQkvV1JNeQjCDmwC65h9rQ8bC5UcJ59qbDX2QVAMHGBW2p5pV4deiVzW9dsCSFfxNKF7pJt7T8DQwoHc4",
  "key28": "5Wgi7ou6pKXdyUricnJMSo5WiTGwpRGfPoSrLuuFWtFsK9sUHXVLgaPtJ5hTjVTunWkWc7fxHuPtjV7meW2wuVJ1",
  "key29": "2RgdDvvfx3LUrkM91c4cshnR8Rx5t7GmWRwXsU6xBMi3bTCfvASzwv3EjSXXY7eTfp3XebfozFkWKEMoexojdRwM",
  "key30": "5gYAjYiPphVuhitWUkPwWmskFVcK4LDAmwdFNJRtTaTo7sPUkyCNuRaf8zTmpnz67SB3VAF5q5QC4uRnschqAKG4",
  "key31": "5dee3X467qpkBNq7MRV7Sd7t8ZhfkMMPnK3hdpemL2D4z1CexErRDUqqbNQCaqGNUHG2ptgYfkSi1bbnbicYvEk2",
  "key32": "25V3GuWfSgusJMszuWBEJGARDcYXajXXXSWwhjuVnc23xjX8gijys3jRpE5EEMQXWooEHonTpxXfwGdFeCGK3qzC"
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
