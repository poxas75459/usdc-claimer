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
    "kbZYHvGzSG9Du17rTDNL46g562m5BzEtZCuUtrWjpM1f6twZuKbTcpmiCAkGN5jnkmwu1ftQ4UjwJ2jkSXwb6Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKM1P2436RmQZsuzUTF7Nrrcs7YY9jpBmtCkGSKaWMKqwd1BxJG4P67xfSTWVWwzNatsqG3VoYafYM7DTLorFg1",
  "key1": "3AYEnc3ppFHCnWGqvQe7wzKziEy62ekYBaf2KnKM5eA29e8RjetEjjG9HwVmtxcCD3gUBF1x48L3zM3955bJSqSf",
  "key2": "2doBgw2MyYf5uXJMsmaaV6yHwjYwNci8DrCi6UBLTBnhmQD2nrXDaRKmBx7vEtaTcyPMpNxZtfvV6U54SBF3fsuh",
  "key3": "vfSv7jUJZ9v6hyxZXrt8QoCEBQ38QfkzbP6Y1ZY7bvsS3MygXJqjnHNj6gjTzxfxULFFQWcpLMPjtrHQcZu9DFB",
  "key4": "2JobLUs9aV9CE44BG8XmpY1TrtU8PSU6rdF79knBAhmvcMgftK2tfMX1NJdghxqcRtMXWf9k6HSBjBteauTREXD4",
  "key5": "4DZ25vv2UR8AuTPNfWySeF7jcTovPXGQ9dJgNjWMvAuJdvaJrsQEuKAhBSogfVhXkfj34eXXUFhiM87P3n4QLxEc",
  "key6": "Ha9LrNAcZKAkEzKuCMthp1qNV7F1B4FnjKGdKsSNRx4tmG4aC9hB8a5ELusp1cRtCLWXayqkPopGG1R8519ZNPP",
  "key7": "3t5tY2t7UdCRBdKWUTGVgxXqNg7iRtx4yqdCaAccBwAJnyW5MPBL3PysEJuUAkfSBN1GQESi2S5SsrpRAGBcPTue",
  "key8": "6vPw8Jk79RLhzxwNtjbwqKp1mQ3t5Ax16ym61hjSctjUjmAPUk51tV5xFwNrqJCYUDrtN82STUogpquPFZXkAmU",
  "key9": "3uVozvEJVofs3NoMHcE7UpByzV8Zx14grFmxjjgwCPiDD5zWsa5DK3TS2E3FZbUi9DrxWyV6EeC8gprP96TVzrUD",
  "key10": "2qG6CfLSphijc5HfnRmMzv2Xv5G8WwMX2a6dtZJcYWjAWNWhkAw1k5Rm91tDefmxstVH2UkF1j9UMe9KFTiZ7AQ1",
  "key11": "5JcM6mPvLWcEyt9wSiH7F8U4AsiHVigv1uJ6ELB4VweDPPd7qTRWFnQtELPLUeu6hY3jPBQe3ADY6ZSgzJZWoins",
  "key12": "yJUmS4F6SyAtuwAv2fxekCQF4RVUE5S7iMiF5Xqrs96nVT4RhbEQrMrRZfWdZDporVHdbSRJK3tpxStUgHrrDFd",
  "key13": "2EeV9PW6e9kN1o8SZ8XthZadBDjMJrhgHte8GeNw783gZW94yi3WDiRC3859Bk8hJnHXL8P6b7GojKg3w44Ghas7",
  "key14": "3La3iAJZrLGaZcU88KRisyJbGXpwKi8BBEbT1NpNfZ5B3MfzUdXbfsnQ7k5XH5kK4NfMdqegBgoDzpgxzcCcEGz3",
  "key15": "4hj5ndWmRrGqMzR9SNPxyJTPHcDRKfQJKBNZsvzo5rhw3Xz9kiyTmfSP6H5bLczoBo87XD2gTC528d5Hnd5n1qbF",
  "key16": "WQNKmMq52BZaRrdoWNWjrWEaXGSkk7wYTjroLWhAodo8RdwAxguhkRf3uuLxMCMTJVZebWAXdAe2j64QxVsfqzQ",
  "key17": "2Bu2S2Hpx3FqpDsBDStbtSqsScxNwmpaY6BvuhuNiVXfRPU2i61Y3GoDjgh8CLLfabuW9VoBL58UEybcJmNBkeS9",
  "key18": "4pRRBZXaNDSe31f1H1JPw3f3dVVvXQ6dfLZgCp4HLJ31QFa9q6fp6W98tBARN3qA5rNghZh38TQME2fv1Uygfvqf",
  "key19": "2pTtw7wxejdVjpAwks2AyxcADrQmx4AetRXdaYzVUhAkGRmHhvgMGaXCLRZub8YaVZVH8N4CfQSoxpzQWzn48GN9",
  "key20": "5UrX6AGG8n9KQQgmbaKigkFwVDgtdgt93bGozALEYntCyHBoRMo1zVNX5fRJwEMkH7zQgBNL7jdkiZ4Y5BR6Jarz",
  "key21": "59dz2N4sjZFQPqeHR4fgB21txoC9BiGXtmGrszYF7SGWHeEi6YaFGf6vY8ZrpBxCgMByebsDx8dejKLme7SXArFf",
  "key22": "4P3UAZo6MvrTV1EnZAuLttF4aCbjaVduANkFzWB47cUkr4Vbu5VA1P32LtMb7qnqNdhRdu8PsjP4bvuGuix77kk8",
  "key23": "5JfyJQdZfhNoUAeetQu1pjD67gh41wwWSwadeQBLJWEMC8hCirxc2n79Qsj42BYNtbCDwvGEPd4fShx8j31fdmia",
  "key24": "2so3LGujTFYMgmd1MqRB1vdtSRE12Ayv1y6JoJ4J59Czcya8P4QjGoQCy2zaYrJorLf8NDTi7VZ8Yx9EQcfUtyiB",
  "key25": "5zq3pkdVNcXNmTaiDq5psuJ9nPS2MFLAUuMFoZwe9nAcCyAn8LUuraS1SbJKUHnMTs9RTb1e2SJ33rdCNbBkhE4w",
  "key26": "2aFxzuCfg3J4RiRL7oWMFr6mYagpTmfF3ybEVwHjsWH8UzJb1yPZQkz6fn1wH3pcZSzHYWxQTnwC3D9rLkqu1QHe",
  "key27": "NUPVAYxJDGvoaao11ZwH4fxa33T47KNnxpFDxUSDgqqmseWpbiMNY5eVcvg3yL1y83MvMf6JVZTbmf9ig4KuCB9",
  "key28": "2jrufQtVdTVotUhxp5eetCt1E3Qu1YtUa48iTJn5hVGr5LKN8uHH3WeHH27AuD19KcEiXKssvUF1UxjZNAs4FbMe",
  "key29": "5QEBPdV9SGLPEAG5TMVsDx5uHk8rcC6q43ngJWcXf38VEJggwVMqWSKadpUdZpTva8VLfC93s9kJa4AcqJosBwP6",
  "key30": "hqcVKs7KfwbMHHMK6Gt3apvmmnVHSstvpFV1bPGgGJv5E6pNVwQe1t1yYvK1UtoFhijGwRRKmouBcQGPdAyZpXQ",
  "key31": "2in35gUkAc8jkfUvX33YeU5m47nWNWAntaTASaCoovCzGkcY1DskLpsPrnMuc1qpoCmoKcpbhYNHNJTWEQCqDhiJ"
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
