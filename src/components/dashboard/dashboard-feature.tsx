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
    "aFaTpAnDo3ionfawmGhSmDna8EoVtQqSRu2YXGsN2APM3mKtfqc6gRCfCqbgvNcv4fpN64UEpxeVZbFVZ9NiPny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sBmnTi5PcBu8LcxnY7JsGSNaucrLdZsehySxakoS1vAUaRpWGQdv9XqAjQr5GMKyqWyqv4HZahd4kNUCR3VeaH8",
  "key1": "5CwVuv9aFQbTcf8xaKhYprrLDu9CdZkAxwSo8AwfJJkCA3Bc8zAQ3ErjveZWhZe5cndUo2uiDaXu75E5ZvKQeotg",
  "key2": "3sEdVQ8BD6rC4CN8SausT7yjPnENcws2Y1vyDDTX5RgQKtNY55zdMJWPHdbe2mENtF434CmUGAdmeWuknYLWqjsR",
  "key3": "2rNZ664KJULC4eNY9he5asT6pBE3pgGWtLuX1UbsXkQ4BRK2JxPUS9QWN6q2y9xasmD9sAyYL5Ws1bo9Kc6jPXtD",
  "key4": "56CuaVX8KxEv5X5uhvzMr6n3nXBwtJ8xVwAyKNb4DdUAxziqVgQegNeofHtSqkjVVB3njCbcvbbZ4JUye5fnwkf9",
  "key5": "Dkr6PZpXE3aVHN4xx8hrUZKDYEPWiiijBiCyUkdfRmaWZ2VzsfdS4EPGniRNgswcXWGatZ6Mo8RXP466CXgrVxV",
  "key6": "9niuZBFiUxLXAx2FbhbtgxSHp2NzZGbKG7AFF8ujwWGCiuUAASLyKbije5oXUJigYTscmWYCV6AsEWD24dM7NT8",
  "key7": "5L31EXzmpfSZtdXv3qBRYMu9PSJtdaWgt3PzdUhsWVenMr9BHWaVtFfvkEGjZ3mUBFeiEpbTS5VtAbks2ztDXR5J",
  "key8": "2VoapsJnvZBCRLTNe97AYqdsszsSmZu7EjiyhtExwqBfFm4Qy9y2uFQ7obC146i1h4Ki4MchXWNozaj8N7VrfGsL",
  "key9": "2W6tcD3WqKrT6KRhz64iPDhYrds4N3BDQCue1TLffvGUaX4N1e3bTPSfEdXEV5QMcffrXmucYy9MUzZmVgw8rzvY",
  "key10": "3oudUTfjwezmEiea5gVTMBWbNbgDLSbopF41cgVkZ5HrpvHf9QwJpxaFg4ectGxqsa3HNzrLuVmai4QVrQRSyWDk",
  "key11": "55v7GDZwfefweb3vSiw2QLQEwTFwoAg82RyaEhdqh8KKDXcBEWmdPLrzZUqybrriYVjC8oBQJjqM7LExGynZQrwH",
  "key12": "9sHHUowTG83oAW1Y8cnyzs7WNMDJdiCVrB2nzhG3e3QypqT7ryHkhjVR3rWmjXQiznTCZwTYzFoAn8K8ZLHYQgr",
  "key13": "3beEnF8Z3dhLsF1rHcdPuixrTQrC6KxF7UV8DWZFr1Kd2YMLkrStq91HJUJESRv5N9vDeULcQjzfGHpafr79MEU2",
  "key14": "5MDvNqytGgDQViFy4cToixLWsF15dj1aQb6CTNKZiy9ePa3ySycJ4s3YBGBtGP1NkWNNhC17zRLnex8RMbd5eJLU",
  "key15": "2rSkzq7sFMQhDb4K1J4wTErH1pTSH6YmMUYa9WiGtLReeTPw8bMkW5pwkDVVaVqGw37epDhqyfFRcoTKJkZptfdu",
  "key16": "2sWx8fbm4xZ2pCuufTKW4yrY4nNNjMr5vYLtsKVJjMRVHkz8Rr82DHG1TyFKyK6R4umD4QocFUYGM2CJme5qXDRi",
  "key17": "eJaxGB42mPQRk63NEePVuGeCY11xqTDsUjtFLnEuxz6rU5pGesP5XZ3rS6uHXqiKNTVqELPjMoj79YLEbqrWyh6",
  "key18": "5WqEgbEyG7xXdhW2GnoiNqYxpdKTHnQa8Fdg7S9Z5Pf49uw88Nudt3sbPGoNwHgByzsS2vmoGGtehmAYoE6xWhXS",
  "key19": "wfETGRL1t9avzkSjsP412uYCZEi4iXsnav17TYiLxSRWsr2AuuL1WN4FAkbZmF2wtgeVvh5KA9f1EabDugc3rxj",
  "key20": "5fw5wezEgxeNvkghR3porzTUwZMw8AkQdRQ1bhqdxA6GCyjDRhhqeZvgjJxeqEVZnUn74fK9sJX9fzATgDLtihop",
  "key21": "38GD94SsxHBJ6sH8ZuW3xgUktAfN4ZuwVyYsMSyX3uABPhYxNyhSgxZwiz4ppHkfAnyv92eE9CASWGQPYENavJpv",
  "key22": "34Ngka1SrTQcUZYyaPc2a4SHVUddTtUjgCqeQ8366TvjvmMftG27hakVP1QFwNkMu9DcRgbf6sB5spVN2pw1kPiF",
  "key23": "4yk1q4SfVC21BmgdKgFQTT58oECzMUqhpSfCH291zXq9gxHWThrimtWUiXsba4P6SfPuYHx4mrd2H9Hq1EFb2bf5",
  "key24": "2uMHvjbLj1LgGM8Ui4rjvCDymJvA88kLc3nyo8hNEsvSogGyuRtYvmhZf1T2ee2NDeZH259iozTSgbuuZiT217WM",
  "key25": "2pcXUF7De93A7REktEKfqi5AncoD2GMpALY1PT2A8mSJnSs8Y3ixDkDcQFTmEsYpQJ3kEfagk9kcZfJ3izra9T2L",
  "key26": "5B3qBdpaydJ43w6kTciFKQef48yvzdhMk8J3SraAiTbXsPk8mb1UfA3Zxedf4225GE4EtyGtihn6AAuoKheQESTY",
  "key27": "61cKqbMpb4URhBtRqtyqmUtGSJeZexsVYPpe3cKDvzWYR4f9qgmiwaUiewqb5dPDw84fxzJsXaUWUMwj433nw7sY",
  "key28": "3ZXrBNM4VbLVSCvBAtyyAsaEUTYTG4pjRV3UUXkbtpxiJxqP6UdRMpNGQ2aFMTPPVhS8GnA76cv7MFiMYGrTKr7C",
  "key29": "52RbARbv3hJ2Dr7gYUuE1JWAuMw6ohFwWDaEqPrxfRdJs2Gp3WbvurDabHdTryReAiqGv9foxTXS3YWeqyJstni7",
  "key30": "5xHhcYmQHJwAbsNzVmSdMwhMi6GBF7UXWwgJ2wgnb9QtXvqGAf6Aw6H9okEP5MhRo5ndd5vBShMLHkNpMg6yN2SD",
  "key31": "4SZtWFwaryZwD7PkB2cmYN7uLsyAnKKBEC8y7f5cXnVJF7o3YhTuS4sRnQg6M2Zi9NtUfhPx9SeWgiMJtAtD4UTm",
  "key32": "5JWbNwNvXcuNdx4AqZr93RmDkAV8V98KAoN9CWyWFes4MDFqhVESqxW3un6WXUrowmrjaGTCG9mJ6SVLC74gGSHk",
  "key33": "38fncrS2R9Qq1gR6NnAMM6aVurRjN5rgbDMU1UbxbCP6SeheMzzbVxKXSY2zvathuHaXe5v78GRoJtyVqh7eC9sb",
  "key34": "Byxcnna1MXaz5edXnf2LqyANzjMWYGchHjCDba5ovWdr9gmMtwP6fNsPAdBUw2TZSMTLvT8mMGYWS2RaZXDXZC8",
  "key35": "3eehfxffDA5yAhy8yZr2nhc3CcFNZmy8CxcfX8nbTXfA1ReYtCyBsHQaFGsqqz6QcC6EfAkNV9cZzMaTr3zZbo3L",
  "key36": "4coX7vxJTPwTfRJBszGHxGjGqiByaq4LGc1bnEhsNRW95LTN74nSxcL1KEw4BdV8oU6AnkxgwjVariKxP8xQo7S6",
  "key37": "5ceqT83x6wqTgJwanHUn1sD6Th1rhd7vSpr6dP2EQan99DbzE3dvjsVBHC8xQDbq3Vxia4xeT68LGqiJwn4VLRwh",
  "key38": "4NmMsBLSc5DWWSUmbwNnc872D44tHUhibsWG6iEBHZSmgYQMcBBvSY1bGS7Ko1Qa9tjZJmFqsTJxHZL5SaWLBy3g",
  "key39": "3eXrUELhLrfs6ribczaNi3S3EKgerN3TRxMwqHaQUAcp7Q4P7YvLFRgavZhFAU42HKbfrynEPQ8TQrdrbbCkCoCz",
  "key40": "2gym698wDAkL86Zn3kmWf7dKjrqfm2mtWu8GobnksN2GtPyoJE97gRQ3ntsvwcuBTmK9gJdFJ6x4rb6gCWLyEiLR"
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
